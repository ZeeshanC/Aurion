import { AfterViewInit, Component, ElementRef, OnDestroy, inject, input } from '@angular/core';

type DisposableMesh = {
  geometry?: { dispose(): void };
  material?: { dispose(): void } | Array<{ dispose(): void }>;
};

@Component({
  selector: 'app-space-scene',
  template: '<canvas aria-hidden="true"></canvas>',
  styles: `
    :host {
      position: absolute;
      inset: 0;
      z-index: 0;
      display: block;
      pointer-events: none;
    }

    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
})
export class SpaceScene implements AfterViewInit, OnDestroy {
  readonly variant = input<'room' | 'stack' | 'orbit' | 'hall'>('room');
  private readonly host = inject(ElementRef<HTMLElement>);
  private frame = 0;
  private alive = true;
  private stop: (() => void) | null = null;

  ngAfterViewInit(): void {
    void this.mount();
  }

  ngOnDestroy(): void {
    this.alive = false;
    this.stop?.();
  }

  private async mount(): Promise<void> {
    const canvas = this.host.nativeElement.querySelector('canvas');
    if (!canvas) {
      return;
    }

    const THREE = await import('three/src/Three.js');
    if (!this.alive) {
      return;
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 40);
    camera.position.set(5.4, 2.2, 6.6);

    const room = buildModel(THREE, this.variant());
    const pendant = room.getObjectByName('pendant');
    scene.add(room);
    const pointer = { x: 0, y: 0 };
    const onPointer = (event: PointerEvent): void => {
      pointer.x = event.clientX / window.innerWidth - 0.5;
      pointer.y = event.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('pointermove', onPointer);

    const fit = (): void => {
      const width = this.host.nativeElement.clientWidth || 1;
      const height = this.host.nativeElement.clientHeight || 1;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(this.host.nativeElement);

    const draw = (time: number): void => {
      room.rotation.y = (reduced ? 0.5 : time * 0.00022) + pointer.x * 0.5;
      room.rotation.x = (reduced ? 0.12 : Math.sin(time * 0.00018) * 0.12) + pointer.y * 0.22;
      if (pendant) {
        pendant.position.y = reduced ? pendant.userData['baseY'] : pendant.userData['baseY'] + Math.sin(time * 0.0014) * 0.12;
      }
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    draw(0);
    if (!reduced) {
      const loop = (time: number): void => {
        draw(time);
        this.frame = requestAnimationFrame(loop);
      };
      this.frame = requestAnimationFrame(loop);
    }

    this.stop = () => {
      cancelAnimationFrame(this.frame);
      window.removeEventListener('pointermove', onPointer);
      observer.disconnect();
      scene.traverse((object: DisposableMesh) => {
        object.geometry?.dispose();
        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose());
        } else {
          object.material?.dispose();
        }
      });
      renderer.dispose();
    };
  }
}

function buildModel(THREE: any, variant: 'room' | 'stack' | 'orbit' | 'hall'): any {
  const room = new THREE.Group();
  const line = new THREE.LineBasicMaterial({ color: 0xf4f4f4, transparent: true, opacity: 0.55 });
  const glass = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.05,
    side: THREE.DoubleSide,
  });
  const addBox = (width: number, height: number, depth: number, x: number, y: number, z: number): void => {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const mesh = new THREE.Mesh(geometry, glass);
    mesh.position.set(x, y, z);
    room.add(mesh);
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), line);
    edges.position.set(x, y, z);
    room.add(edges);
  };

  if (variant === 'stack') {
    addBox(3.2, 0.08, 2.2, 0, -0.9, 0);
    addBox(2.4, 0.08, 1.8, 0.2, -0.2, 0.1);
    addBox(1.6, 0.08, 1.3, -0.15, 0.5, -0.05);
    addBox(0.9, 0.08, 0.8, 0.1, 1.1, 0.15);
  } else if (variant === 'orbit') {
    for (let index = 0; index < 8; index += 1) {
      const angle = (index / 8) * Math.PI * 2;
      addBox(0.7, 1.1, 0.08, Math.cos(angle) * 1.7, 0, Math.sin(angle) * 1.7);
    }
    addBox(1.2, 0.06, 1.2, 0, -0.7, 0);
  } else if (variant === 'hall') {
    addBox(6.2, 2.2, 2.2, 0, 0, 0);
    addBox(1.4, 0.05, 1.2, -1.2, -0.7, 0);
    addBox(1.4, 0.05, 1.2, 1.1, -0.35, 0);
  } else {
    addBox(4.4, 2.5, 4.4, 0, 0, 0);
    addBox(1.5, 0.04, 0.9, -0.7, -0.35, 0.2);
    addBox(0.08, 1.15, 1.4, 1.15, -0.2, -0.4);
    addBox(1.1, 0.9, 0.06, -0.2, 0.15, -1.35);
  }

  const pendant = new THREE.Mesh(
    new THREE.SphereGeometry(0.08, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0xffffff }),
  );
  pendant.name = 'pendant';
  pendant.position.set(0, 0.85, 0);
  pendant.userData = { baseY: 0.85 };
  room.add(pendant);
  return room;
}

import { Component, inject, signal } from '@angular/core';
import { NgParticlesService, NgxParticlesModule, type IParticlesProps } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';

@Component({
  selector: 'app-particle-field',
  imports: [NgxParticlesModule],
  template: `
    @if (ready()) {
      <ngx-particles id="aurion-field" [options]="options" />
    }
  `,
  styles: `
    :host {
      position: absolute;
      inset: 0;
      z-index: 0;
      display: block;
      pointer-events: none;
    }

    :host ::ng-deep ngx-particles,
    :host ::ng-deep canvas {
      width: 100%;
      height: 100%;
    }
  `,
})
export class ParticleField {
  private readonly particles = inject(NgParticlesService);
  readonly ready = signal(false);
  readonly options: IParticlesProps = {
    fullScreen: { enable: false },
    background: { color: 'transparent' },
    fpsLimit: 40,
    detectRetina: true,
    particles: {
      number: { value: 48 },
      color: { value: '#f4f4f4' },
      opacity: { value: 0.35 },
      size: { value: { min: 0.6, max: 1.6 } },
      links: {
        enable: true,
        color: '#f4f4f4',
        opacity: 0.16,
        distance: 130,
        width: 1,
      },
      move: { enable: true, speed: 0.35, outModes: { default: 'bounce' } },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
      },
      modes: { grab: { distance: 160, links: { opacity: 0.35 } } },
    },
  };

  constructor() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    void this.particles
      .init(async (engine) => {
        await loadSlim(engine);
      })
      .then(() => this.ready.set(true));
  }
}

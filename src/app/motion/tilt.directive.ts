import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appTilt]',
  host: {
    style: 'transform-style: preserve-3d; transition: transform 180ms ease',
  },
})
export class TiltDirective {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  @HostListener('pointermove', ['$event'])
  tilt(event: PointerEvent): void {
    if (this.reduced) {
      return;
    }
    const box = this.host.nativeElement.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    this.host.nativeElement.style.transform =
      `perspective(900px) rotateX(${(-y * 9).toFixed(2)}deg) rotateY(${(x * 12).toFixed(2)}deg) translateZ(0)`;
  }

  @HostListener('pointerleave')
  reset(): void {
    this.host.nativeElement.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  }
}

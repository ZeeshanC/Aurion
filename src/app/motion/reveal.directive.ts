import { afterNextRender, Directive, ElementRef, inject, input } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly animations = inject(AnimationController);
  readonly revealDelay = input(0);

  constructor() {
    afterNextRender(() => this.arm());
  }

  private arm(): void {
    const element = this.host.nativeElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    element.style.opacity = '0';
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return;
        }
        observer.disconnect();
        void this.animations
          .create()
          .addElement(element)
          .duration(780)
          .delay(this.revealDelay())
          .easing('cubic-bezier(0.16, 1, 0.3, 1)')
          .fromTo('opacity', '0', '1')
          .fromTo('transform', 'translateY(32px)', 'translateY(0)')
          .play();
      },
      { threshold: 0.16, rootMargin: '0px 0px -6% 0px' },
    );
    observer.observe(element);
  }
}

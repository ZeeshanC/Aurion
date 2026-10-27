import { afterNextRender, Component, DestroyRef, HostListener, inject, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AnimationController, IonApp, IonContent, IonMenu, MenuController } from '@ionic/angular';
import { MatRipple } from '@angular/material/core';
import { filter } from 'rxjs';
import { MeetingDirective } from './meeting/meeting.directive';
import { navigation } from './data/studio.content';
import { applyTheme, theme } from '../theme/theme.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonContent, IonMenu, RouterOutlet, RouterLink, RouterLinkActive, MatRipple, MeetingDirective],
})
export class AppComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly menu = inject(MenuController);
  private readonly animations = inject(AnimationController);
  private readonly scroller = viewChild<IonContent>('scroller');

  readonly theme = theme;
  readonly navigation = navigation;
  readonly clock = signal(this.stamp());

  constructor() {
    applyTheme();
    const timer = window.setInterval(() => this.clock.set(this.stamp()), 1000);
    this.destroyRef.onDestroy(() => window.clearInterval(timer));

    afterNextRender(() => this.playBar());

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        void this.menu.close('nav');
        setTimeout(() => {
          void this.scroller()?.scrollToTop(0);
          this.playPage();
        });
      });
  }

  animateMenu(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const links = [...document.querySelectorAll('.menu-panel nav a')] as HTMLElement[];
    void this.animations
      .create()
      .addAnimation(
        links.map((link, index) =>
          this.animations
            .create()
            .addElement(link)
            .duration(460)
            .delay(80 + index * 55)
            .easing('cubic-bezier(0.16, 1, 0.3, 1)')
            .fromTo('opacity', '0', '1')
            .fromTo('transform', 'translateX(28px)', 'translateX(0)'),
        ),
      )
      .play();
  }

  private playBar(): void {
    const bar = document.querySelector('.topbar');
    if (!bar || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    void this.animations
      .create()
      .addElement(bar)
      .duration(700)
      .easing('cubic-bezier(0.16, 1, 0.3, 1)')
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateY(-16px)', 'translateY(0)')
      .play();
  }

  private playPage(): void {
    const page = document.querySelector('article.page');
    if (!page || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    void this.animations
      .create()
      .addElement(page)
      .duration(560)
      .easing('cubic-bezier(0.22, 1, 0.36, 1)')
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateY(22px)', 'translateY(0)')
      .play();
  }

  @HostListener('window:pointermove', ['$event'])
  follow(event: PointerEvent): void {
    document.documentElement.style.setProperty('--mx', `${event.clientX}px`);
    document.documentElement.style.setProperty('--my', `${event.clientY}px`);
  }

  async openMenu(): Promise<void> {
    for (let attempt = 0; attempt < 20; attempt += 1) {
      if (await this.menu.open('nav')) {
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 40));
    }
  }

  closeMenu(): void {
    void this.menu.close('nav');
  }

  private stamp(): string {
    const time = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
      timeZone: 'UTC',
    }).format(new Date());
    return `${time} UTC`;
  }
}

import { afterNextRender, Component, ElementRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { disciplines, projects } from '../../data/studio.content';
import { MeetingMenu } from '../../meeting/meeting-menu.component';
import { motionImports } from '../../motion/motion';
import { ParticleField } from '../../shared/particle-field.component';
import { VizPlate } from '../../shared/viz-plate.component';
import { theme } from '../../../theme/theme.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  imports: [RouterLink, VizPlate, ParticleField, MeetingMenu, ...motionImports],
})
export class HomePage {
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly theme = theme;
  readonly offers = disciplines.slice(0, 4);
  readonly featured = projects;
  readonly industries = ['Residential', 'Offices', 'Restaurants', 'Retail', 'Hospitality', 'Wellness'];

  constructor() {
    afterNextRender(() => this.playHero());
  }

  private playHero(): void {
    const root = this.host.nativeElement;
    const lines = root.querySelectorAll('.hero .outline');
    const intro = root.querySelectorAll('.hero-lead, .hero-actions');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set([...lines, ...intro], { opacity: 1, y: 0 });
      return;
    }
    gsap.fromTo(
      lines,
      { y: 72, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.15, stagger: 0.16, delay: 0.12, ease: 'power4.out' },
    );
    gsap.fromTo(
      intro,
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, delay: 0.55, ease: 'power3.out' },
    );
  }
}

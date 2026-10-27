import { afterNextRender, Component, ElementRef, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { disciplines, projects } from '../../data/studio.content';
import { MeetingDirective } from '../../meeting/meeting.directive';
import { motionImports } from '../../motion/motion';
import { VizPlate } from '../../shared/viz-plate.component';
import { theme } from '../../../theme/theme.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  imports: [RouterLink, VizPlate, ...motionImports],
})
export class HomePage {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly animations = inject(AnimationController);

  readonly theme = theme;
  readonly offers = disciplines.slice(0, 4);
  readonly featured = projects;
  readonly industries = ['Residential', 'Offices', 'Restaurants', 'Retail', 'Hospitality', 'Wellness'];

  constructor() {
    inject(Title).setTitle(`${theme.brand} — ${theme.tagline}`);
    afterNextRender(() => this.playHero());
  }

  private playHero(): void {
    const lines = [...this.host.nativeElement.querySelectorAll('.hero .outline')] as HTMLElement[];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      lines.forEach((line) => (line.style.opacity = '1'));
      return;
    }
    void this.animations
      .create()
      .addAnimation(
        lines.map((line, index) =>
          this.animations
            .create()
            .addElement(line)
            .duration(980)
            .delay(180 + index * 160)
            .easing('cubic-bezier(0.16, 1, 0.3, 1)')
            .fromTo('opacity', '0', '1')
            .fromTo('transform', 'translateY(54px)', 'translateY(0)'),
        ),
      )
      .play();
  }
}

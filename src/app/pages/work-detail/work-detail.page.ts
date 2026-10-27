import { Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../seo/seo.service';
import { findProject, nextProject } from '../../data/studio.content';
import { motionImports } from '../../motion/motion';
import { VizPlate } from '../../shared/viz-plate.component';
import { theme } from '../../../theme/theme.config';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.page.html',
  imports: [RouterLink, VizPlate, ...motionImports],
})
export class WorkDetailPage {
  readonly slug = input.required<string>();
  readonly project = computed(() => findProject(this.slug()));
  readonly next = computed(() => nextProject(this.slug()));

  constructor() {
    const seo = inject(SeoService);
    effect(() => {
      const work = this.project();
      seo.apply(
        work
          ? {
              title: `${work.title} — ${theme.brand} interior design`,
              description: work.summary,
              path: `/works/${work.slug}`,
            }
          : {
              title: `Project not found — ${theme.brand}`,
              description: 'That interior is not in the Aurion archive.',
              path: '/works',
            },
      );
    });
  }
}

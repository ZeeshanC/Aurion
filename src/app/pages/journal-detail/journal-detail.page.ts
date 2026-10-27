import { Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../seo/seo.service';
import { findArticle } from '../../data/studio.content';
import { motionImports } from '../../motion/motion';
import { VizPlate } from '../../shared/viz-plate.component';
import { theme } from '../../../theme/theme.config';

@Component({
  selector: 'app-journal-detail',
  templateUrl: './journal-detail.page.html',
  imports: [RouterLink, VizPlate, ...motionImports],
})
export class JournalDetailPage {
  readonly slug = input.required<string>();
  readonly article = computed(() => findArticle(this.slug()));

  constructor() {
    const seo = inject(SeoService);
    effect(() => {
      const article = this.article();
      seo.apply(
        article
          ? {
              title: `${article.title} — ${theme.brand} journal`,
              description: article.excerpt,
              path: `/journal/${article.slug}`,
            }
          : {
              title: `Article not found — ${theme.brand}`,
              description: 'That note is not in the Aurion journal.',
              path: '/journal',
            },
      );
    });
  }
}

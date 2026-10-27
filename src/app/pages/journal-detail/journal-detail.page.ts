import { Component, computed, effect, inject, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
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
    const title = inject(Title);
    effect(() => {
      const article = this.article();
      title.setTitle(article ? `${article.title} — ${theme.brand}` : `Signal lost — ${theme.brand}`);
    });
  }
}

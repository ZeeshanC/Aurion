import { Component, computed, effect, inject, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
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
    const title = inject(Title);
    effect(() => {
      const work = this.project();
      title.setTitle(work ? `${work.title} — ${theme.brand}` : `Signal lost — ${theme.brand}`);
    });
  }
}

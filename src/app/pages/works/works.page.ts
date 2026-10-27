import { Component, computed, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { projects, typologies } from '../../data/studio.content';
import { motionImports } from '../../motion/motion';
import { VizPlate } from '../../shared/viz-plate.component';
import { theme } from '../../../theme/theme.config';

@Component({
  selector: 'app-works',
  templateUrl: './works.page.html',
  imports: [RouterLink, VizPlate, ...motionImports],
})
export class WorksPage {
  readonly typologies = typologies;
  readonly active = signal('All');
  readonly works = computed(() =>
    this.active() === 'All' ? projects : projects.filter((project) => project.typology === this.active()),
  );

  constructor() {
    inject(Title).setTitle(`Works — ${theme.brand}`);
  }

  select(typology: string): void {
    this.active.set(typology);
  }
}

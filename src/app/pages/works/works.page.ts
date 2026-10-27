import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projects, typologies } from '../../data/studio.content';
import { motionImports } from '../../motion/motion';
import { VizPlate } from '../../shared/viz-plate.component';

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

  select(typology: string): void {
    this.active.set(typology);
  }
}

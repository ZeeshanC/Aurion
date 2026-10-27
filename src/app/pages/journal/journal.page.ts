import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { journal } from '../../data/studio.content';
import { motionImports } from '../../motion/motion';
import { VizPlate } from '../../shared/viz-plate.component';
import { theme } from '../../../theme/theme.config';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  imports: [RouterLink, VizPlate, ...motionImports],
})
export class JournalPage {
  readonly notes = journal;

  constructor() {
    inject(Title).setTitle(`Journal — ${theme.brand}`);
  }
}

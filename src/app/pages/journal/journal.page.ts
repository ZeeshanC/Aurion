import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { journal } from '../../data/studio.content';
import { motionImports } from '../../motion/motion';
import { VizPlate } from '../../shared/viz-plate.component';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  imports: [RouterLink, VizPlate, ...motionImports],
})
export class JournalPage {
  readonly notes = journal;
}

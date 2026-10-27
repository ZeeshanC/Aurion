import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { disciplines } from '../../data/studio.content';
import { motionImports } from '../../motion/motion';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.page.html',
  imports: [RouterLink, ...motionImports],
})
export class DisciplinesPage {
  readonly disciplines = disciplines;
}

import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { disciplines } from '../../data/studio.content';
import { motionImports } from '../../motion/motion';
import { theme } from '../../../theme/theme.config';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.page.html',
  imports: [RouterLink, ...motionImports],
})
export class DisciplinesPage {
  readonly disciplines = disciplines;

  constructor() {
    inject(Title).setTitle(`Disciplines — ${theme.brand}`);
  }
}

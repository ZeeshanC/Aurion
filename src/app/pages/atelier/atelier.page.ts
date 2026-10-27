import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { materials, principles, studios, team } from '../../data/studio.content';
import { motionImports } from '../../motion/motion';
import { VizPlate } from '../../shared/viz-plate.component';
import { theme } from '../../../theme/theme.config';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.page.html',
  imports: [RouterLink, VizPlate, ...motionImports],
})
export class AtelierPage {
  readonly theme = theme;
  readonly principles = principles;
  readonly materials = materials;
  readonly team = team;
  readonly studios = studios;
}

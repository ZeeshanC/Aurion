import { MatRipple } from '@angular/material/core';
import { SpaceScene } from '../shared/space-scene.component';
import { RevealDirective } from './reveal.directive';
import { TiltDirective } from './tilt.directive';

export const motionImports = [RevealDirective, MatRipple, TiltDirective, SpaceScene] as const;

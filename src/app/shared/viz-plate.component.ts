import { Component, input } from '@angular/core';

@Component({
  selector: 'app-viz',
  template: `
    <div class="viz" [attr.data-viz]="kind()" aria-hidden="true">
      <i></i>
      <i></i>
      <i></i>
      <b></b>
    </div>
  `,
})
export class VizPlate {
  readonly kind = input.required<string>();
}

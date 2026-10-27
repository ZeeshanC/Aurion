import { Component, input } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-meeting-menu',
  imports: [MatMenu, MatMenuItem, MatMenuTrigger, MatRipple],
  template: `
    <button type="button" matRipple class="ripple-surface" [class]="appearance()" [matMenuTriggerFor]="choices">
      <ng-content />
    </button>
    <mat-menu #choices="matMenu" class="meeting-choices">
      <a mat-menu-item href="https://wa.me/918511717710" target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
      <a mat-menu-item href="tel:+918511717710">
        Phone · +91 85117 17710
      </a>
    </mat-menu>
  `,
})
export class MeetingMenu {
  readonly appearance = input('btn solid');
}

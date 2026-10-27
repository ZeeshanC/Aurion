import { Directive, inject } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MeetingPopover } from './meeting-popover.component';

@Directive({
  selector: '[appMeeting]',
  host: {
    '(click)': 'open($event)',
  },
})
export class MeetingDirective {
  private readonly popover = inject(PopoverController);

  async open(event: Event): Promise<void> {
    event.preventDefault();
    const overlay = await this.popover.create({
      component: MeetingPopover,
      event,
      cssClass: 'meeting-popover',
      arrow: true,
      dismissOnSelect: true,
    });
    await overlay.present();
  }
}

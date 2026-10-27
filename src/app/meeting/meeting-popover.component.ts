import { Component, inject } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-meeting-popover',
  template: `
    <div class="meeting-menu">
      <p>Book a meeting</p>
      <a href="https://wa.me/918511717710" target="_blank" rel="noopener noreferrer" (click)="close()">
        WhatsApp
        <small>+91 85117 17710</small>
      </a>
      <a href="tel:+918511717710" (click)="close()">
        Phone
        <small>+91 85117 17710</small>
      </a>
    </div>
  `,
  styles: `
    .meeting-menu {
      display: grid;
      gap: 4px;
      min-width: 230px;
      padding: 10px;
    }

    p {
      margin: 2px 8px 6px;
      color: var(--faint, #8d8d8d);
      font-family: var(--font-mono, ui-monospace, monospace);
      font-size: 11px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    a {
      display: grid;
      gap: 2px;
      padding: 12px 14px;
      border-radius: 14px;
      color: var(--ink, #f3f3f3);
      text-decoration: none;
    }

    a:hover {
      background: color-mix(in srgb, var(--ink, #fff) 8%, transparent);
    }

    small {
      color: var(--muted, #bdbdbd);
      font-size: 13px;
      letter-spacing: 0.02em;
    }
  `,
})
export class MeetingPopover {
  private readonly popover = inject(PopoverController);

  close(): void {
    void this.popover.dismiss();
  }
}

import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { disciplines, studios } from '../../data/studio.content';
import { motionImports } from '../../motion/motion';
import { theme } from '../../../theme/theme.config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  imports: [ReactiveFormsModule, ...motionImports],
})
export class ContactPage {
  private readonly formBuilder = inject(FormBuilder);

  readonly theme = theme;
  readonly studios = studios;
  readonly disciplines = disciplines;
  readonly attempted = signal(false);
  readonly sent = signal(false);
  readonly form = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    typology: ['Residence', Validators.required],
    city: [''],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  showError(key: 'name' | 'email' | 'typology' | 'message'): boolean {
    const control = this.form.controls[key];
    return control.invalid && (control.touched || this.attempted());
  }

  submit(): void {
    this.attempted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sent.set(true);
  }
}

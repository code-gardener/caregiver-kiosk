// app/patient/form.component.ts
import { Component, computed, inject } from '@angular/core';
import { LockService } from '../../services/lock.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-form',
  template: `
    <h2>Form: {{ formId() }}</h2>
    <!-- Form content here -->
    <button (click)="complete()">Submit and Return</button>
  `
})
export class FormComponent {
  private lockService = inject(LockService);
  private router = inject(Router);

  formId = computed(() => this.lockService.lockedFormId());

  complete() {
    this.router.navigate(['/unlock']);
  }
}

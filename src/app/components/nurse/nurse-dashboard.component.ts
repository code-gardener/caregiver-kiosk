// app/nurse/nurse-dashboard.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LockService } from '../../services/lock.service';

@Component({
  standalone: true,
  selector: 'app-nurse-dashboard',
  templateUrl: './nurse-dashboard.component.html',
  styleUrls: ['./nurse-dashboard.component.scss'],
})
export class NurseDashboardComponent {
  constructor(private lockService: LockService, private router: Router) {}

  startForm(formId: string) {
    this.lockService.lock(formId);
    this.router.navigate(['/form']);
  }
}

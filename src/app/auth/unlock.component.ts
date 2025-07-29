// app/auth/unlock.component.ts
import { Component } from '@angular/core';
import { LockService } from '../services/lock.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-unlock',
  imports: [FormsModule],
  template: `
    <h2>Unlock Form Mode</h2>
    <input [(ngModel)]="password" type="password" placeholder="Enter nurse password" />
    <button (click)="unlock()">Unlock</button>
  `
})
export class UnlockComponent {
  password = '';
  constructor(private lockService: LockService, private router: Router) {}

  unlock() {
    // Replace this with real auth
    if (this.password === 'nurse123') {
      this.lockService.unlock();
      this.router.navigate(['/nurse']);
    } else {
      alert('Invalid password');
    }
  }
}

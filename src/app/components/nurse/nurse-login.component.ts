import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NurseAuthService } from '../../services/nurse-auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nurse-login',
  templateUrl: './nurse-login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  styleUrls: ['./nurse-login.component.scss']
})
export class NurseLoginComponent {
  username = '';
  password = '';
  error = signal('');

  constructor(
    private auth: NurseAuthService,
    private router: Router
  ) {}

  async login() {
    const success = await this.auth.login(this.username, this.password);
    if (!success) {
      this.error.set('Invalid credentials');
      return;
    }
    this.router.navigateByUrl('/nurse');
  }

  async useFaceId() {
    const success = await this.auth.biometricLogin();
    if (success) {
      this.router.navigateByUrl('/nurse');
    } else {
      this.error.set('Face ID failed or unavailable');
    }
  }
}
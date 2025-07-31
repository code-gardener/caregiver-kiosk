import { Component, Inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NURSE_AUTH } from '../../services/nurse-auth-token.service';
import { NurseAuth } from '../../services/nurse-auth.interface';

@Component({
  selector: 'app-nurse-login',
  templateUrl: './nurse-login.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrls: ['./nurse-login.component.scss']
})
export class NurseLoginComponent {
  username = '';
  password = '';
  error = signal('');

  constructor(
    @Inject(NURSE_AUTH) private auth: NurseAuth,
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

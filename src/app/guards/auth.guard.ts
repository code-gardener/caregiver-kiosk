// auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { NurseAuthService } from '../services/nurse-auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(NurseAuthService);
  const router = inject(Router);

  if (auth.isAuthenticated()) {
    return true;
  } else {
    router.navigateByUrl('/nurse-login');
    return false;
  }
};
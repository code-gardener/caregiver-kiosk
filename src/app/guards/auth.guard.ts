// auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { NURSE_AUTH } from '../services/nurse-auth-token.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(NURSE_AUTH); // <-- Inject the token, not the concrete service
  const router = inject(Router);

  if (auth.isAuthenticated()) {
    return true;
  } else {
    router.navigateByUrl('/nurse-login');
    return false;
  }
};

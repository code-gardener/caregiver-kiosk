// app/guards/lock.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LockService } from '../services/lock.service';

export const lockGuard: CanActivateFn = () => {
  const lockService = inject(LockService);
  const router = inject(Router);

  if (!lockService.isLocked()) {
    router.navigate(['/nurse']);
    return false;
  }

  return true;
};

// app/lock.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LockService {
  private _isLocked = signal(false);
  private _lockedFormId = signal<string | null>(null);

  isLocked = this._isLocked.asReadonly();
  lockedFormId = this._lockedFormId.asReadonly();

  lock(formId: string) {
    this._isLocked.set(true);
    this._lockedFormId.set(formId);
  }

  unlock() {
    this._isLocked.set(false);
    this._lockedFormId.set(null);
  }
}

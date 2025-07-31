import { signal, Signal } from '@angular/core';

export interface NurseAuth {
  login(username: string, password: string): Promise<boolean>;
  biometricLogin(): Promise<boolean>;
  logout(): void;
  isAuthenticated: Signal<boolean>;
  nurseId: Signal<string | null>;
}
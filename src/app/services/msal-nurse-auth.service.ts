import { Injectable, signal } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { BiometricAuth as FaceAuth } from '@aparajita/capacitor-biometric-auth';
import { NurseAuth } from "./nurse-auth.interface";
import { MsalService } from '@azure/msal-angular';

const NURSE_STORAGE_KEY = 'nurseToken';

@Injectable({ providedIn: 'root' })
export class MsalNurseAuthService implements NurseAuth {
  constructor(private msal: MsalService) {}

  private _isAuthenticated = signal(false);
  isAuthenticated = this._isAuthenticated.asReadonly();

  private _nurseId = signal<string | null>(null);
  nurseId = this._nurseId.asReadonly();

  async login(username: string, password: string): Promise<boolean> {
    // Placeholder: Replace with real AAD login later
    if (username === 'nurse' && password === '1234') {
      await Preferences.set({ key: NURSE_STORAGE_KEY, value: username });
      this._nurseId.set(username);
      this._isAuthenticated.set(true);
      return true;
    }
    return false;
  }

  async biometricLogin(): Promise<boolean> {
    try {
      const availability = await FaceAuth.checkBiometry();
      if (!availability.isAvailable) return false;

      await FaceAuth.authenticate({
        reason: 'Authenticate Nurse',
        cancelTitle: 'Cancel',
        iosFallbackTitle: 'Use Passcode',
        allowDeviceCredential: true
      });

      const stored = await Preferences.get({ key: NURSE_STORAGE_KEY });
      if (stored.value) {
        this._nurseId.set(stored.value);
        this._isAuthenticated.set(true);
        return true;
      }
    } catch (err) {
      console.warn('Biometric login failed:', err);
    }
    return false;
  }

  logout() {
    Preferences.remove({ key: NURSE_STORAGE_KEY });
    this._isAuthenticated.set(false);
    this._nurseId.set(null);
  }
}

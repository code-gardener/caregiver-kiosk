import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { NURSE_AUTH } from '../app/services/nurse-auth-token.service';
import { HardcodedNurseAuthService } from '../app/services/nurse-auth.service';
import { MsalNurseAuthService } from './services/msal-nurse-auth.service';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    {
      provide: NURSE_AUTH,
      useClass: environment.useMsalAuth
        ? MsalNurseAuthService
        : HardcodedNurseAuthService,
    }
  ]
};
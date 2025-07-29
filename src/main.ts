import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { App } from './app/app'; // should exist

bootstrapApplication(App, {
  providers: [provideRouter(appRoutes)],
});

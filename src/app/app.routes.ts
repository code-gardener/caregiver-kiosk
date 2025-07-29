// app/app.routes.ts
import { Routes } from '@angular/router';
import { lockGuard } from './guards/lock.guard';
import { authGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
  { 
    path: 'nurse', 
    loadComponent: () => import('./components/nurse/nurse-dashboard.component').then(m => m.NurseDashboardComponent),
    canActivate: [authGuard] 
  },
  { 
    path: 'form', 
    loadComponent: () => import('./components/patient/form.component').then(m => m.FormComponent), 
    canActivate: [lockGuard] 
  },
  { 
    path: 'unlock', 
    loadComponent: () => import('./auth/unlock.component').then(m => m.UnlockComponent) 
  },
  {
    path: 'nurse-login',
    loadComponent: () => import('./components/nurse/nurse-login.component').then(m => m.NurseLoginComponent)
  },
  { 
    path: '', 
    redirectTo: '/nurse', 
    pathMatch: 'full' 
  } 
];

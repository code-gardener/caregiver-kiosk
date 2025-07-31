// src/app/services/nurse-auth.token.ts
import { InjectionToken } from '@angular/core';
import { NurseAuth } from './nurse-auth.interface';

export const NURSE_AUTH = new InjectionToken<NurseAuth>('NURSE_AUTH');

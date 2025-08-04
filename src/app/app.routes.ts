import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login.component.ts/login.component.ts';
import { ForgotPasswordComponent } from './screens/forgot-password-component/forgot-password-component.js';
import { DashboardComponent } from './screens/dashboard-component/dashboard-component.js';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];

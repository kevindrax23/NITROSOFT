import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login.component.ts/login.component.ts';
import { ForgotPasswordComponent } from './screens/forgot-password-component/forgot-password-component.js';
import { DashboardComponent } from './screens/dashboard-component/dashboard-component.js';
import { SignaturesUser } from './screens/signatures-user/signatures-user.js';
import { SettingUser } from './screens/setting-user/setting-user.js';
import { MailUser } from './screens/mail-user/mail-user.js';
import { StaticsUser } from './screens/statics-user/statics-user.js';
import { TestUser } from './screens/test-user/test-user.js';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard],
    children:[
      { path: '', redirectTo: 'signatures', pathMatch: 'full' }, // por defecto después de login
      { path: 'signatures', component: SignaturesUser },
      { path: 'statics', component: StaticsUser },
      { path: 'settings', component: SettingUser },
      { path: 'mail', component: MailUser },
      { path: 'test', component: TestUser }
    ]
   },
  { path: '**', redirectTo: '' }
];

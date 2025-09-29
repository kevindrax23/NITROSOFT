import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login.component.ts/login.component.ts';
import { ForgotPasswordComponent } from './screens/forgot-password-component/forgot-password-component.js';
import { DashboardComponent } from './screens/dashboard-component/dashboard-component.js';
import { LoadingCharge } from './screens/loading-charge/loading-charge.js';
import { SignaturesComponent } from './screens/signatures-user/signatures-user.js';
import { SettingUser } from './screens/setting-user/setting-user.js';
import { MailUser } from './screens/mail-user/mail-user.js';
import { StaticsUser } from './screens/statics-user/statics-user.js';
import { TestUser } from './screens/test-user/test-user.js';
import { AuthGuard } from './services/auth.guard';
import { PhysicsLessonsComponent } from './screens/physics-lessons/physics-lessons.js';
import { IntroPhysicsComponent } from './screens/intro-physics/intro-physics.js';
import { EvaluationsComponent } from './screens/evaluations/evaluations.js';
import { SubjectExamsComponent } from './screens/subject-examsng/subject-examsng.js';
import { ExamComponent } from './screens/exam/exam.js';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'loading', component: LoadingCharge },
  { path: 'forgot', component: ForgotPasswordComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'signatures', pathMatch: 'full' }, // por defecto después de login
      { path: 'signatures', component: SignaturesComponent },
      { path: 'evaluations',component: EvaluationsComponent,},
      { path: 'evaluations/:subject', component: SubjectExamsComponent },
      { path: 'signatures/physics/introduction',component: IntroPhysicsComponent,},
      { path: 'statics', component: StaticsUser },
      { path: 'settings', component: SettingUser },
      { path: 'mail', component: MailUser },
      { path: 'test', component: TestUser },
      { path: 'physics-lessons', component: PhysicsLessonsComponent },
    ],
  },
  { path: 'evaluations/:subject/exam/:topic',component: ExamComponent,},
  { path: '**', redirectTo: '' },
];

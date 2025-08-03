import { Routes } from '@angular/router';
import { LoginComponentTs } from './screens/login.component.ts/login.component.ts';

export const routes: Routes = [{ path: '', component: LoginComponentTs }, // Página inicial
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirecciona rutas inválidas];
]

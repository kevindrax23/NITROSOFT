import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private firebase: FirebaseService, private router: Router) {}

  async canActivate(): Promise<boolean | UrlTree> {
    const isAuth = await this.firebase.isAuthenticated();
    if (isAuth) return true;
    // No autenticado -> redirigir al login
    return this.router.parseUrl('/');
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { FirebaseService } from '../../services/firebase.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <h2>Restablecer Contraseña</h2>
      <form (ngSubmit)="resetPassword()">
        <label>Correo electrónico</label>
        <input type="email" [(ngModel)]="email" name="email" required />
        <button type="submit">Enviar enlace</button>
        <p class="success" *ngIf="message">{{ message }}</p>
      </form>
    </div>
  `,
  styles: [`
    .login-container { max-width: 400px; margin: 100px auto; background-color: #1e1e1e; color: white; padding: 2rem; border-radius: 12px; }
    input { width: 100%; padding: 0.75rem; margin-top: 1rem; border-radius: 8px; background-color: #2b2b2b; border: none; color: white; }
    button { margin-top: 1rem; width: 100%; padding: 0.75rem; border-radius: 8px; background-color: #4a4a4a; color: white; font-weight: bold; }
    .success { margin-top: 1rem; color: #0f0; }
  `]
})
export class ForgotPasswordComponent {
  email = '';
  message = '';

  constructor(private firebase: FirebaseService) {}

  async resetPassword() {
    const auth = this.firebase.getAuthInstance();
    await sendPasswordResetEmail(auth, this.email);
    this.message = 'Revisa tu correo para restablecer la contraseña.';
  }
}

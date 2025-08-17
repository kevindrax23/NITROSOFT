import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../../services/firebase.service';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.ts.html',
  styleUrls: ['./login.component.ts.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  remember = false;
  error = '';

  constructor(public router: Router, private firebase: FirebaseService) {}

  ngOnInit(): void {
    // Cargar credenciales guardadas si existen
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedEmail && savedPassword) {
      this.email = savedEmail;
      this.password = savedPassword;
      this.remember = true;
    }
  }

  async login() {

      try {
      const auth = this.firebase.getAuthInstance();
      const result = await signInWithEmailAndPassword(auth, this.email, this.password);

      if (this.remember) {
        localStorage.setItem('email', this.email);
        localStorage.setItem('password', this.password);
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }

      setTimeout(() =>{
      this.router.navigate(['/loading'])
    },500)
    } catch (err: any) {
      this.error = 'Credenciales incorrectas o no válidas.';
    }
  }
}

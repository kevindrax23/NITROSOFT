import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service'; // Ajusta la ruta según tu estructura

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  isOpen = true;
  userName = 'Kevindrax23';
  isOnline = true;

  navItems = [
    { label: 'Asignaturas', route: '/dashboard/signatures', icon: 'bi bi-speedometer2' },
    { label: 'Evaluaciones', route: '/dashboard/evaluations', icon: 'bi bi-card-checklist' },
    { label: 'Correo', route: '/dashboard/mail', icon: 'bi bi-envelope-at-fill' },
    { label: 'Configuracion', route: '/dashboard/settings', icon: 'bi bi-gear' },
    { label: 'Estadisticas', route: '/dashboard/statics', icon: 'bi bi-bar-chart-line-fill' }
  ];

  constructor(
    private router: Router,
    private firebaseService: FirebaseService,
  ) {}

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  toggleStatus() {
    this.isOnline = !this.isOnline;
  }

  async logout() {
    await this.firebaseService.logout();
    this.router.navigate(['/login']);
  }
}

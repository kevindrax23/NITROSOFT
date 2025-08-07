import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

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
    { label: 'Evaluaciones', route: '/dashboard/test', icon: 'bi bi-card-checklist' },
    { label: 'Correo', route: '/dashboard/mail', icon: 'bi bi-envelope-at-fill' },
    { label: 'Configuracion', route: '/dashboard/settings', icon: 'bi bi-gear' },
    { label: 'Estadisticas', route: '/dashboard/statics', icon: 'bi bi-bar-chart-line-fill' }
  ];

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  toggleStatus() {
    this.isOnline = !this.isOnline;
  }

  logout() {
    this.router.navigate(['/login']);
  }
}

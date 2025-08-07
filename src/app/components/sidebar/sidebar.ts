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
  userName = 'Usuario';
  isOnline = true;

  navItems = [
    { label: 'Dashboard', route: '/dashboard', icon: 'bi bi-speedometer2' },
    { label: 'Ventas', route: '/ventas', icon: 'bi bi-currency-dollar' },
    { label: 'Inventario', route: '/inventario', icon: 'bi bi-box-seam' },
    { label: 'Clientes', route: '/clientes', icon: 'bi bi-people-fill' },
    { label: 'Reportes', route: '/reportes', icon: 'bi bi-bar-chart-line-fill' }
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

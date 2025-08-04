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

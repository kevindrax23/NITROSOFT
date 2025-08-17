import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  imports: [CommonModule, RouterLink, RouterModule],
  selector: 'app-signatures',
  templateUrl: './signatures-user.html',
  styleUrls: ['./signatures-user.css']
})
export class SignaturesComponent {
  subjects = [
    { title: 'Física', icon: 'assets/icons/physics.png', route: '/physics' },
    { title: 'Química', icon: 'assets/icons/chemistry.png', route: '/chemistry' },
    { title: 'Matemáticas', icon: 'assets/icons/math.png', route: '/math' },
    { title: 'Geometría', icon: 'assets/icons/geometry.png', route: '/geometry' }
  ];

  constructor(private router: Router) {}

  goToSubject(route: string) {
    this.router.navigate([route]);
  }
}

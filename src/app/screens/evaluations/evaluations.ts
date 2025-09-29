import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evaluations',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './evaluations.html',
  styleUrls: ['./evaluations.css']
})
export class EvaluationsComponent {
  subjects = [
    { title: 'Física', route: 'physics' },
    { title: 'Química', route: 'chemistry' },
    { title: 'Matemáticas', route: 'math' },
    { title: 'Geometría', route: 'geometry' }
  ];

  constructor(private router: Router) {}

  goToSubject(subject: string) {
    this.router.navigate([`/dashboard/evaluations/${subject}`]);
  }
}

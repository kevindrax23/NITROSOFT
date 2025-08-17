import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

interface Lesson {
  title: string;
  description: string;
  level: number; // 1 = fácil, mayor = más difícil
  icon: string;
  color: string;
}

@Component({
  imports:[CommonModule],
  selector: 'app-physics-lessons',
  standalone: true,
  templateUrl: './physics-lessons.html',
  styleUrls: ['./physics-lessons.css']
})
export class PhysicsLessonsComponent implements OnInit {
  lessons: Lesson[] = [];

  ngOnInit(): void {
    this.lessons = [
      { title: 'Introducción a la Física', description: 'Conceptos básicos y unidades.', level: 1, icon: '📘', color: '#00ff88' },
      { title: 'Movimiento Rectilíneo', description: 'Velocidad, aceleración y gráficas.', level: 2, icon: '🏃', color: '#00d0ff' },
      { title: 'Leyes de Newton', description: 'Dinámica y fuerzas fundamentales.', level: 3, icon: '⚖️', color: '#ffcc00' },
      { title: 'Energía y Trabajo', description: 'Tipos de energía, potencia y conservación.', level: 4, icon: '⚡', color: '#ff6600' },
      { title: 'Óptica y Luz', description: 'Reflexión, refracción y lentes.', level: 5, icon: '🔦', color: '#ff3366' },
      { title: 'Electricidad y Magnetismo', description: 'Campos eléctricos y magnéticos.', level: 6, icon: '🧲', color: '#9d00ff' },
      { title: 'Física Moderna', description: 'Relatividad y mecánica cuántica.', level: 7, icon: '🌌', color: '#ff0066' }
    ];

    // Ordenar de fácil a difícil
    this.lessons.sort((a, b) => a.level - b.level);
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subject-examsng',
  imports: [CommonModule],
  templateUrl: './subject-examsng.html',
  styleUrl: './subject-examsng.css'
})
export class SubjectExamsComponent {
  subject: string = '';
  topics: string[] = [];

  allTopics = {
    physics: [
      'Introducción a la Física', 'Movimiento Rectilíneo', 'Leyes de Newton',
      'Energía y Trabajo', 'Óptica y Luz', 'Electricidad y Magnetismo',
      'Física Moderna', 'Ondas y Sonido', 'Termodinámica', 'Gravitación'
    ],
    chemistry: [
      'Átomos y Elementos', 'Tabla Periódica', 'Enlaces Químicos',
      'Reacciones Químicas', 'Soluciones', 'Ácidos y Bases',
      'Química Orgánica', 'Electroquímica', 'Termoquímica', 'Química Nuclear'
    ],
    math: [
      'Aritmética Básica', 'Álgebra', 'Ecuaciones Lineales',
      'Funciones', 'Trigonometría', 'Geometría Analítica',
      'Cálculo Diferencial', 'Cálculo Integral', 'Probabilidad', 'Estadística'
    ],
    geometry: [
      'Figuras Planas', 'Ángulos', 'Triángulos',
      'Cuadriláteros', 'Circunferencia', 'Área y Perímetro',
      'Volumen de Cuerpos', 'Teorema de Pitágoras', 'Transformaciones', 'Geometría Espacial'
    ]
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.subject = this.route.snapshot.paramMap.get('subject') || '';
    this.topics = this.allTopics[this.subject as keyof typeof this.allTopics] || [];
  }

  startExam(topic: string) {
    this.router.navigate([`/evaluations/${this.subject}/exam`, topic]);
  }
}

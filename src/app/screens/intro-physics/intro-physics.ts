import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro-physics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro-physics.html',
  styleUrls: ['./intro-physics.css']
})
export class IntroPhysicsComponent {
  introText = `
  La física es la ciencia que estudia los principios fundamentales del universo.
  Desde el movimiento de los planetas hasta las ondas de luz, todo está regido por leyes físicas.

  En esta lección introductoria, comenzaremos con:
  1. ¿Qué es la física? La rama que busca desentrañar cómo funciona la naturaleza.
  2. Aplicaciones cotidianas: gravedad, energía, ondas, luz.
  3. Método científico y observación.
  4. Importancia de las magnitudes, unidades, y referencias cuantitativas.

  Según OpenStax, “la ciencia consiste en teorías y leyes que son verdades generales de la naturaleza y el cuerpo de conocimiento que encierran” :contentReference[oaicite:1]{index=1}.
  `;
}

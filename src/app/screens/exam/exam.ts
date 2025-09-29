import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { CommonModule, DatePipe } from '@angular/common'

@Component({
  selector: 'app-exam',
  templateUrl: './exam.html',
  standalone:true,
  imports: [CommonModule, DatePipe],
  styleUrls: ['./exam.css']
})
export class ExamComponent implements OnInit {
  subject!: string;
  topic!: string;
  questions: any[] = [];
  currentQuestion = 0;
  answers: number[] = [];
  score = 0;
  timeLeft = 1800; // 30 min en segundos
  interval: any;

  constructor(private route: ActivatedRoute, private router: Router, private firestore: Firestore) {}

  ngOnInit() {
    this.subject = this.route.snapshot.paramMap.get('subject') || '';
    this.topic = this.route.snapshot.paramMap.get('topic') || '';
    this.loadQuestions();

    this.interval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.finishExam();
      }
    }, 1000);
  }

  loadQuestions() {
    // 🔥 Ejemplo de 10 preguntas (deberías cargar de Firebase en producción)
    this.questions = [
      { text: 'Pregunta 1 de ' + this.topic, options: ['A', 'B', 'C', 'D'], correct: 0 },
      { text: 'Pregunta 2 de ' + this.topic, options: ['A', 'B', 'C', 'D'], correct: 1 },
      { text: 'Pregunta 3 de ' + this.topic, options: ['A', 'B', 'C', 'D'], correct: 2 },
      { text: 'Pregunta 4 de ' + this.topic, options: ['A', 'B', 'C', 'D'], correct: 3 },
      { text: 'Pregunta 5 de ' + this.topic, options: ['A', 'B', 'C', 'D'], correct: 0 },
      { text: 'Pregunta 6 de ' + this.topic, options: ['A', 'B', 'C', 'D'], correct: 1 },
      { text: 'Pregunta 7 de ' + this.topic, options: ['A', 'B', 'C', 'D'], correct: 2 },
      { text: 'Pregunta 8 de ' + this.topic, options: ['A', 'B', 'C', 'D'], correct: 3 },
      { text: 'Pregunta 9 de ' + this.topic, options: ['A', 'B', 'C', 'D'], correct: 0 },
      { text: 'Pregunta 10 de ' + this.topic, options: ['A', 'B', 'C', 'D'], correct: 1 },
    ];
  }

  selectAnswer(optionIndex: number) {
    this.answers[this.currentQuestion] = optionIndex;
  }

  nextQuestion() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    }
  }

  prevQuestion() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
    }
  }

  async finishExam() {
    clearInterval(this.interval);
    this.score = this.answers.filter((ans, i) => ans === this.questions[i].correct).length;

    // Guardar en Firebase
    const resultsRef = collection(this.firestore, 'results');
    await addDoc(resultsRef, {
      subject: this.subject,
      topic: this.topic,
      score: this.score,
      total: this.questions.length,
      date: new Date()
    });

    alert(`Examen terminado. Puntaje: ${this.score}/${this.questions.length}`);
    this.router.navigate(['/evaluations']);
  }
}

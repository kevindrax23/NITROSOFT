import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-charge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-charge.html',
  styleUrls: ['./loading-charge.css']
})
export class LoadingCharge {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Simulamos carga de datos / validación
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 4500); // 2.5 segundos en la pantalla de carga
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-background-animation',
  template: '<canvas #canvas></canvas>',
  styleUrls: ['./background-animation.css']
})
export class BackgroundAnimationComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  ngOnInit(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let lines = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      amplitude: 20 + Math.random() * 30,
      frequency: 0.01 + Math.random() * 0.02,
      phase: Math.random() * Math.PI * 2,
      speed: 0.5 + Math.random() * 1,
      color: `rgba(255,255,255,${Math.random() * 0.1 + 0.005})`
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 1;

      lines.forEach(line => {
        ctx.beginPath();
        ctx.strokeStyle = line.color;

        for (let x = 0; x < canvas.width; x += 10) {
          const y = line.y + Math.sin(x * line.frequency + line.phase) * line.amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
        line.y += line.speed;
        if (line.y > canvas.height) {
          line.y = 0;
        }
        line.phase += 0.02;
      });

      requestAnimationFrame(draw);
    }

    draw();
  }
}

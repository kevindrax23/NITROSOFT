import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundAnimationComponent } from "./components/background-animation/background-animation";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BackgroundAnimationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Nitrosoft');
}

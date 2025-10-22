import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlCiclo } from './components/control-ciclo/control-ciclo';

@Component({
  selector: 'app-root',
  imports: [ControlCiclo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('app-ciclo');
}

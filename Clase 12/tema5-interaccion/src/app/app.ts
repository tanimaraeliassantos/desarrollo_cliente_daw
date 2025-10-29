import { Component, signal } from '@angular/core';
import { ComponenteDos } from './componente-dos/componente-dos';

@Component({
  selector: 'app-root',
  imports: [ComponenteDos],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tema5-interaccion');

  nombre = 'Menta';
  clicks = 0;

  saludar(): string {
    return `Hola mi mascota se llama, ${this.nombre}`;
  }

  contar(): void {
    this.clicks++;
  }
}

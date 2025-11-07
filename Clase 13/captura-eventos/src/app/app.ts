import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('captura-eventos');
  //USUARIO: capturar los clicks
  clicks = signal(0);
  hacerClick() {
    this.clicks.update((v) => v + 1);
  }

  mensaje = signal('');
  saludarA(nombre: string) {
    this.mensaje.set(`Hola, ${nombre}`);
  }

  ultimoEvento = signal<any | null>(null);
  capturarEvento(ev: Event) {
    const key = ev as KeyboardEvent;
    this.ultimoEvento.set({
      tecla: key.key ?? null,
    });
  }
}
``
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
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
}

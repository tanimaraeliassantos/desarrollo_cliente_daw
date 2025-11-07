import { Component, signal } from '@angular/core';

interface Juego{
  titulo: string;
  imagen: string;
  plataforma: string;
  anio: number;
}
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('formulario-juegos');
  juegps: Juego[] = [];

  }


import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommsPadre } from "./components/comms-padre/comms-padre";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommsPadre],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}

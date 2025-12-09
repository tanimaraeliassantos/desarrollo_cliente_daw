import { Component, signal } from '@angular/core';
import { FlujoIf } from "./components/flujo-if/flujo-if";

@Component({
  selector: 'app-root',
  imports: [FlujoIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tema6-signals');
}

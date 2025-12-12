import { Component, signal } from '@angular/core';
import { FlujoIf } from './components/flujo-if/flujo-if';
import { FlujoFor } from './components/flujo-for/flujo-for';
import { FlujoSwitch } from './components/flujo-switch/flujo-switch';

@Component({
  selector: 'app-root',
  imports: [FlujoIf, FlujoFor, FlujoSwitch],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tema6-signals');
}

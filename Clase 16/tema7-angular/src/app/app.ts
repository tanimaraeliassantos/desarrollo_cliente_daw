import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaColoresComponent } from './components/lista-colores/lista-colores';
import { FormTemplateComponent } from './components/form-template/form-template';

@Component({
  selector: 'app-root',
  imports: [ListaColoresComponent, FormTemplateComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tema7-angular');
}

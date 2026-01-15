import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaColoresComponent } from './components/lista-colores/lista-colores';
import { FormTemplateComponent } from './components/form-template/form-template';
import { FormReactivoComponent } from './components/form-reactivo/form-reactivo';

@Component({
  selector: 'app-root',
  imports: [
    ListaColoresComponent,
    FormTemplateComponent,
    FormTemplateComponent,
    FormReactivoComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tema7-angular');
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaColoresComponent } from './components/lista-colores/lista-colores';
import { FormTemplateComponent } from './components/form-template/form-template';
import { FormReactivoComponent } from './components/form-reactivo/form-reactivo';
import { FormValidadoComponent } from './components/form-validado/form-validado';

@Component({
  selector: 'app-root',
  imports: [
    ListaColoresComponent,
    FormTemplateComponent,
    FormTemplateComponent,
    FormReactivoComponent,
    FormValidadoComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tema7-angular');
}

import { Component, inject } from '@angular/core';
import { ClientesService } from '../../services/clientes';

@Component({
  selector: 'app-lista-colores',
  imports: [],
  templateUrl: './lista-colores.html',
  styleUrl: './lista-colores.css',
})
export class ListaColoresComponent {
  private clientesService = inject(ClientesService)

  colores = this.clientesService.getColores();
}

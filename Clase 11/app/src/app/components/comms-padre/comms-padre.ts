import { Component } from '@angular/core';
import { CommsHijo } from '../comms-hijo/comms-hijo';

@Component({
  selector: 'app-comms-padre',
  imports: [CommsHijo],
  templateUrl: './comms-padre.html',
  styleUrl: './comms-padre.css',
})
export class CommsPadre {
  mostrarHijo = false;
  nombre = 'Maria';
  ultimoMensaje = ''

  crearHijo(): void {
    this.mostrarHijo = true;
  }

  destruirHijo(): void {
    this.mostrarHijo = false;
    this.ultimoMensaje = '';
  }

  cambiarNombre(): void {
    if (this.nombre === 'Maria') {
      this.nombre = 'Pedro';
    } else {
      this.nombre = 'Maria';
    }
  }

onSaludo(mensaje: string): void{
  this.ultimoMensaje = mensaje;
}

}

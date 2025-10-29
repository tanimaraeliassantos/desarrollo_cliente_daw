import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-dos',
  imports: [],
  templateUrl: './componente-dos.html',
  styleUrl: './componente-dos.css',
})
export class ComponenteDos {
  nombre = 'Pablo';
  edad = 9;

  enlace = 'https://www.sezane.com/es-es';
  mensaje = 'Qué bonito <strong>jersey</strong>';

  activo = false;
  colorClase = 'colorUno';

  obtenerSaludo(): string {
    return `Para soy ${this.nombre}, ya tengo ${this.edad} años`;
  }
}

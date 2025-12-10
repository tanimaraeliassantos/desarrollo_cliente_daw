import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-flujo-if',
  imports: [],
  templateUrl: './flujo-if.html',
  styleUrl: './flujo-if.css',
})
export class FlujoIf {
  //Señal = super variable
  edad = signal<number>(0);

  actualizarEdad(valor: string) {
    //Casting
    const numero = Number(valor);

    //operador ternario = if
    this.edad.set(isNaN(numero) ? 0 : numero);
  }
}

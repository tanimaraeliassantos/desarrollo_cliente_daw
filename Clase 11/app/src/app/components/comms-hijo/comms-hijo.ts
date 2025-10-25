import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comms-hijo',
  imports: [],
  templateUrl: './comms-hijo.html',
  styleUrl: './comms-hijo.css',
})
export class CommsHijo {
  @Input() nombre=''

  @Output() saludo = new EventEmitter<string>()

  emitirSaludo(): void{
    const mensaje = `Hola soy, ${this.nombre}`
    this.saludo.emit(mensaje)
  }
}

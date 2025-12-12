import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-flujo-switch',
  imports: [],
  templateUrl: './flujo-switch.html',
  styleUrl: './flujo-switch.css',
})
export class FlujoSwitch {
  roles = ['admin', 'editor', 'suscriptor', 'invitado', 'Kim Jong Un'];
  rol = signal<string>('admin');

  cambiarRol(valor: string) {
    this.rol.set(valor);
  }
}

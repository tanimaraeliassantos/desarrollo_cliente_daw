import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private colores: string[] = ['blue', 'red', 'violet', 'yellow', 'green'];
  getColores(): string[] {
    return this.colores;
  }
}

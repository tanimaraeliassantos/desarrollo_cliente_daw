import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './form-reactivo.html',
  styleUrl: './form-reactivo.css',
})
export class FormReactivoComponent {
  form = new FormGroup({
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    edad: new FormControl(''),
    direccion: new FormControl(''),
  });

  onSubmit() {
    console.log('Formulario reactivo: ', this.form.value);
  }
}

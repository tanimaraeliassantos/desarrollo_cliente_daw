import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-validado',
  imports: [ReactiveFormsModule],
  templateUrl: './form-validado.html',
  styleUrl: './form-validado.css',
})
export class FormValidadoComponent {
  form = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.pattern('[\\w\\-\\s\\/]+')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    edad: new FormControl('', [Validators.required, this.rangoEdadValidator(18, 65)]),
  });

  get nombre() {
    return this.form.controls.nombre;
  }
  get email() {
    return this.form.controls.email;
  }
  get edad() {
    return this.form.controls.edad;
  }
  rangoEdadValidator(min: number, max: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const raw = control.value;
      if (raw === null || raw === '') return null; // lo gestiona required
      const edad = Number(raw);

      if (Number.isNaN(edad)) {
        return { rangoEdad: { message: 'La edad debe ser un número' } };
      }

      if (edad >= min && edad <= max) {
        return null;
      } else {
        return { rangoEdad: { message: `La edad debe estar entre ${min} y ${max}` } };
      }
    };
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario válido:', this.form.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}

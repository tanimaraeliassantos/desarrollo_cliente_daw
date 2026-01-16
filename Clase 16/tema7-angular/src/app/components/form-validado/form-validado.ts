import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-validado',
  imports: [],
  templateUrl: './form-validado.html',
  styleUrl: './form-validado.css',
})
export class FormValidado {
  form = new FormGroup({
    nombre: new FormControl('',
    [Validators.required, Validators.pattern])
  })

}

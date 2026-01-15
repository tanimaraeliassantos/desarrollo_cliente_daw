import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  imports: [FormsModule],
  templateUrl: './form-template.html',
  styleUrl: './form-template.css',
})
export class FormTemplateComponent {
  onSubmit(form: NgForm) {
    console.log('Template form enviado correctamente', form.value);
  }
}

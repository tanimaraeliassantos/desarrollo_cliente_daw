import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeriesService } from '../../services/series';

@Component({
  selector: 'app-new',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new.html',
  styleUrl: './new.css',
})
export class NewComponent {
  private fb = inject(FormBuilder);
  private seriesService = inject(SeriesService);
  private router = inject(Router);

  responseId: string | null = null;

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    channel: ['', Validators.required],
    rating: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
  });

  onSubmit(): void {
    if (this.form.invalid) return;
    this.seriesService.create(this.form.value).subscribe((res: any) => {
      this.responseId = res._id ?? res.id ?? JSON.stringify(res);
      setTimeout(() => this.router.navigate(['/home']), 2500);
    });
  }
}

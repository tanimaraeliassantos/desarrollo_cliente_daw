import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PostsService } from '../../services/posts';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './post-form.html',
  styleUrl: './post-form.css',
})
export class PostFormComponent {
  form = new FormGroup({
    title: new FormControl('', { nonNullable: true }),
    body: new FormControl('', { nonNullable: true }),
  });
  constructor(
    private postsService: PostsService,
    private router: Router,
  ) {}

  save() {
    const payload: Post = {
      userId: 1,
      title: this.form.controls.title.value,
      body: this.form.controls.body.value,
      id: 0, // no es necesario, pero no molesta
    };

    this.postsService.create(payload).subscribe({
      next: (created) => this.router.navigate(['/posts', created.id ?? 1]),
      error: (e) => console.error('Error creando:', e),
    });
  }
}

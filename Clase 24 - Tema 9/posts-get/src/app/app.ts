import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

import { PostsService } from './services/posts';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './app.html',
})
export class AppComponent {
  posts$: Observable<Post[]>;

  constructor(private postsService: PostsService) {
    this.posts$ = this.postsService.getAll();
  }
}

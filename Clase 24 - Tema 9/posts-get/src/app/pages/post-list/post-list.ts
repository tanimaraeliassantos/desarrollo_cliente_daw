import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-posts-list',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostListComponent {
  posts$!: Observable<Post[]>;

  constructor(private postsService: PostsService) {
    this.posts$ = this.postsService.getAll();
  }
}

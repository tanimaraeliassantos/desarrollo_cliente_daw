import { Routes } from '@angular/router';
import { PostListComponent } from './pages/post-list/post-list';
import { PostDetailComponent } from './pages/post-detail/post-detail';

export const routes: Routes = [
    {path:'', redirectTo:'posts', pathMatch:'full'},
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: '**', redirectTo: 'posts' },
];

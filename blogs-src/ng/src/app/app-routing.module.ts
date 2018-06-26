import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';

const routes: Routes = [
  {
    path: 'blog-posts',
    component: BlogPostsComponent,
    data: { title: 'Posts' }
  },
  {
    path: 'blog-posts/:id',
    component: BlogPostComponent,
    data: { title: 'Posts' }
  },
  { path: '',
    redirectTo: 'blog-posts',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

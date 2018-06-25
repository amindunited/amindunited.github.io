import { BlogPostsService } from './../../services/blog-posts/blog-posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amu-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {

  posts$;

  constructor(blogPostsService: BlogPostsService) {
    this.posts$ = blogPostsService.getPosts();

    // .subscribe((data) => {
    //     this.posts = { ...data.posts };
    //     console.log('go posts', this.posts);
    //     // return data.posts;
    //   });
  }

  ngOnInit() {
  }

}

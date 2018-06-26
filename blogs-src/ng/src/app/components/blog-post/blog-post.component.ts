import { BlogPostsService } from './../../services/blog-posts/blog-posts.service';
import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'amu-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  private id: Number;
  public post$;

  constructor(private route: ActivatedRoute, private blogPostService: BlogPostsService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.post$ = from(this.blogPostService.getPosts())
      .pipe(
        mergeMap(payload => {
          const post$ = payload.posts.filter((post) => {
            return post.id === this.id;
          }).reduce((acc, curr) => {
            console.log('...', acc);
            return acc;
          });
          return of(post$);
        }
      ));
  }

}

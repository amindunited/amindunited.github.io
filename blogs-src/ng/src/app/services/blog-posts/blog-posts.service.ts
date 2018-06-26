import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BlogPostsService {

  public blogPosts;

  constructor(private httpClient: HttpClient) { }

  public getPosts (): Observable<any> {

    if (this.blogPosts) {
      return Observable.create((observer) => {
        observer.next(this.blogPosts);
      });
    }

    // tslint:disable-next-line
    const BASE_URL = 'https://gist.githubusercontent.com/amindunited/f6a619416efb261361c8abaf1c1da6be/raw/';
    const REVISION_SHA = '9d53efe362363befdfe997a4632d57cc635b5101';
    const POSTS_URL = `${BASE_URL}${REVISION_SHA}/posts.json`;

    const request = this.httpClient.get(POSTS_URL);

    request.subscribe((payload) => {
      this.blogPosts = payload;
    });

    return request;

  }
}

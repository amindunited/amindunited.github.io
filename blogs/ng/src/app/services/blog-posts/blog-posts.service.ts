import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class BlogPostsService {

  constructor(private httpClient: HttpClient) { }

  public getPosts (): Observable<HttpResponse<any[]>> {
    // tslint:disable-next-line
    const BASE_URL = 'https://gist.githubusercontent.com/amindunited/f6a619416efb261361c8abaf1c1da6be/raw/';
    const REVISION_SHA = 'c16c12047d99745f8471866d00edcae29e1629c2';
    const POSTS_URL = `${BASE_URL}${REVISION_SHA}/posts.json`;
    return this.httpClient.get(POSTS_URL);
  }
}

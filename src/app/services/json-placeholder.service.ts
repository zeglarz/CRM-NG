import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostMessage, PostMessageAuthor} from "../interfaces/post-message";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {
  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<PostMessage[]> {
    return this.http.get<PostMessage[]>('https://jsonplaceholder.typicode.com/posts');
  }

  public getOne(postId: string): Observable<PostMessage> {
    return this.http.get<PostMessage>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  public getUserById(id: string): Observable<PostMessageAuthor> {
    return this.http.get<PostMessageAuthor>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}

import {Injectable} from '@angular/core';
import {PostMessage} from "../interfaces/post-message";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {JsonPlaceholderService} from "./json-placeholder.service";

@Injectable()
export class PostMessageResolver implements Resolve<PostMessage> {

  constructor(private api: JsonPlaceholderService) {
  }

  public resolve(route: ActivatedRouteSnapshot): Observable<PostMessage> {
    const postId: string = route.paramMap.get('id');
    return this.api.getOne(postId);
  }
}

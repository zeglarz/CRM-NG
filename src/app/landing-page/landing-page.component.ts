import {Component, OnInit} from '@angular/core';
import {JsonPlaceholderService} from "../services/json-placeholder.service";
import {Observable} from "rxjs";
import {PostMessage} from "../interfaces/post-message";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public post$: Observable<PostMessage[]>;

  constructor(private api: JsonPlaceholderService) {
  }

  public ngOnInit(): void {
    this.post$ = this.api.getAll();
  }
}

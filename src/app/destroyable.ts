import {OnDestroy} from "@angular/core";
import {Observable, Subject} from "rxjs";

export class Destroyable implements OnDestroy {
  public destroyed$: Observable<void>;
  private destroySubj: Subject<void> = new Subject<void>();

  constructor() {
    this.destroyed$ = this.destroySubj.asObservable();
  }

  public ngOnDestroy(): void {
    this.destroySubj.next();
    this.destroySubj.complete();
  }
}

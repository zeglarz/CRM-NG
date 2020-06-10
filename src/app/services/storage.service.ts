import {Injectable} from '@angular/core';
import {Customer} from "../interfaces/customer";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable()
export class StorageService {
  public customer$: Observable<Customer>;
  private customerSubj: BehaviorSubject<Customer> = new BehaviorSubject<Customer>(null);

  constructor() {
    this.customer$ = this.customerSubj.asObservable();
  }

  public nextCustomer(customer: Customer): void {
    this.customerSubj.next(customer);
  }
}

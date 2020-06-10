import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Customer} from "../interfaces/customer";
import {Observable} from "rxjs";
import {CrmApiService} from "../services/crm-api.service";

@Injectable()
export class CustomersResolver implements Resolve<Customer[]> {

  constructor(private crmApi: CrmApiService) {
  }

  public resolve(): Observable<Customer[]> {
    return this.crmApi.getCustomers();
  }
}

import {Component, OnInit} from '@angular/core';
import {CrmApiService} from '../../services/crm-api.service';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {Customer} from '../../interfaces/customer';

@Component({
  selector: 'app-single-customer-view',
  templateUrl: './single-customer-view.component.html',
  styleUrls: ['./single-customer-view.component.scss']
})
export class SingleCustomerViewComponent implements OnInit {
  public customer$: Observable<Customer>;
  public customerFullName$: Observable<string>;
  public email$: Observable<string>;
  private readonly customerId$: Observable<string>;

  constructor(private crmService: CrmApiService, private route: ActivatedRoute) {
    this.customerId$ = route.paramMap.pipe(map((params: ParamMap) => params.get('id')));
  }

  public ngOnInit(): void {
    this.customer$ = this.customerId$
      .pipe(switchMap((id: string) => this.crmService.getCustomerById(id)));
    this.email$ = this.customer$.pipe(map((customer: Customer) => customer.email));
    this.customerFullName$ = this.customer$.pipe(map((customer: Customer) => `${customer.firstName} ${customer.lastName}`));
  }
}

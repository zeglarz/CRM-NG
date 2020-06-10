import {Component, OnInit} from '@angular/core';
import {Customer} from '../../interfaces/customer';
import {Observable} from 'rxjs';
import {CrmApiService} from '../../services/crm-api.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  public customers$: Observable<Customer[]>;

  constructor(private crmApi: CrmApiService) {
  }

  public ngOnInit(): void {
    this.customers$ = this.crmApi.getCustomers();
  }

}

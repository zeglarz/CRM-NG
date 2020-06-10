import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomersRoutingModule} from './customers-routing.module';
import {CustomersListComponent} from './customers-list/customers-list.component';
import {CrmApiService} from "../services/crm-api.service";
import {CustomersResolver} from "./customers-resolver";
import { SingleCustomerViewComponent } from './single-customer-view/single-customer-view.component';


@NgModule({
  declarations: [CustomersListComponent, SingleCustomerViewComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers: [
    CrmApiService,
    CustomersResolver,
  ]
})
export class CustomersModule {
}

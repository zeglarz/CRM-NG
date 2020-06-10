import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomersListComponent} from './customers-list/customers-list.component';
import {CustomersResolver} from "./customers-resolver";
import {SingleCustomerViewComponent} from "./single-customer-view/single-customer-view.component";


const routes: Routes = [
  {
    path: '',
    component: CustomersListComponent,
  },
  {
    path: ':id',
    component: SingleCustomerViewComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './main/main.component';
import {CustomerFormComponent} from './components/customer-form/customer-form.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'add-customer',
    component: CustomerFormComponent,
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
export class AdminRoutingModule { }

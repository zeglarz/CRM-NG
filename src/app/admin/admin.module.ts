import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {MainComponent} from './main/main.component';
import {UserDataPresenterComponent} from './components/user-data-presenter/user-data-presenter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomerFormComponent} from './components/customer-form/customer-form.component';
import {CONFIG, Config, Level} from '../interfaces/config';
import {ApiService} from '../services/api.service';
import {AdminApiService} from './services/admin-api.service';
import {CrmApiService} from "../services/crm-api.service";

const config: Config = {
  url: 'http://www.wp.pl',
  count: 0,
  level: Level.HIGH
};

@NgModule({
  declarations: [MainComponent, UserDataPresenterComponent, CustomerFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: CONFIG,
      useValue: config,
    },
    {
      provide: ApiService,
      useClass: AdminApiService,
    },
    CrmApiService,
  ],
})
export class AdminModule {
}

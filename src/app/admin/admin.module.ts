import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './main/main.component';
import { UserDataPresenterComponent } from './components/user-data-presenter/user-data-presenter.component';


@NgModule({
  declarations: [MainComponent, UserDataPresenterComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

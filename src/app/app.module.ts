import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {InfoComponent} from './info/info.component';
import {AdminGuardService} from './services/admin-guard.service';
import {UserDataService} from './services/user-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AdminGuardService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

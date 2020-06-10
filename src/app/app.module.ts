import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {InfoComponent} from './info/info.component';
import {AdminGuardService} from './services/admin-guard.service';
import {UserDataService} from './services/user-data.service';
import {StorageService} from './services/storage.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {PostMessageResolver} from './services/post-message.resolver';
import {AngularFireModule} from '@angular/fire';
import {firebase} from '../environments/firebase.config';
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/firestore";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
  ],
  providers: [AdminGuardService, UserDataService, StorageService, HttpClient, PostMessageResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}

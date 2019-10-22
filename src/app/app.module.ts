import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { LendBookPage } from './pages/lend-book/lend-book.page';
import { LendCdPage } from './pages/lend-cd/lend-cd.page';
import { AuthService } from './services/auth.service';
import { IonicStorageModule } from '@ionic/storage';
import {ReactiveFormsModule} from '@angular/forms';
import {FirebaseService} from './services/firebase.service';

@NgModule({
  declarations: [
      AppComponent,
      LendBookPage,
      LendCdPage
  ],
  entryComponents: [
      LendBookPage,
      LendCdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DataService,
    AuthService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

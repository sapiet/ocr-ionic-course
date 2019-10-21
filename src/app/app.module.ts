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
import {LendCdPage} from './pages/lend-cd/lend-cd.page';

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
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

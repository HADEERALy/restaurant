import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListingPage } from '../pages/listing/listing';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DataProvider } from '../providers/data/data';
import { HttpClientModule} from '@angular/common/http';
import { SplashPage } from '../pages/splash/splash';
import { BoardingComponent } from '../pages/boarding/boarding';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListingPage,
    SplashPage,
    BoardingComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListingPage,
    SplashPage,
    BoardingComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}

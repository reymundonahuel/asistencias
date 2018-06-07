import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NoteService } from "../service/notes.service";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Division1Page } from '../pages/division1/division1';
import { Division2Page } from "../pages/division2/division2";
import { Manana11Page } from "../pages/manana11/manana11";
import { Añadir11Page } from "../pages/añadir11/añadir11";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Division1Page,
    Division2Page,
    Manana11Page,
    Añadir11Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Division1Page,
    Division2Page,
    Manana11Page,
    Añadir11Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},NoteService
  ]
})
export class AppModule {}

import { ProductmodalPageModule } from './modals/productmodal/productmodal.module';
import { DocmodalPageModule } from './modals/docmodal/docmodal.module';
import { PharmodalPageModule } from './modals/pharmodal/pharmodal.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(
    {
      mode: 'md'
    }
  ), AppRoutingModule,
    PharmodalPageModule,
    ProductmodalPageModule,
    DocmodalPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

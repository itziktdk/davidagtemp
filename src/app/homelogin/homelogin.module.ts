import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { homeloginPage } from './homelogin.page';

import { homeloginPageRoutingModule } from './homelogin-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    homeloginPageRoutingModule
  ],
  declarations: [homeloginPage]
})
export class homeloginPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { register2PageRoutingModule } from './register2-routing.module';

import { register2Page } from './register2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    register2PageRoutingModule
  ],
  declarations: [register2Page]
})
export class register2PageModule {}

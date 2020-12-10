import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { register4PageRoutingModule } from './register4-routing.module';

import { register4Page } from './register4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    register4PageRoutingModule
  ],
  declarations: [register4Page]
})
export class register4PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { register1PageRoutingModule } from './register1-routing.module';

import { register1Page } from './register1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    register1PageRoutingModule
  ],
  declarations: [register1Page]
})
export class register1PageModule {}

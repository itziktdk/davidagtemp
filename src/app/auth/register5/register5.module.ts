import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { register5PageRoutingModule } from './register5-routing.module';

import { register5Page } from './register5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    register5PageRoutingModule
  ],
  declarations: [register5Page]
})
export class register5PageModule {}

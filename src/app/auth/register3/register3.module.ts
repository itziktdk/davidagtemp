import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { register3PageRoutingModule } from './register3-routing.module';

import { register3Page } from './register3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    register3PageRoutingModule
  ],
  declarations: [register3Page]
})
export class register3PageModule {}

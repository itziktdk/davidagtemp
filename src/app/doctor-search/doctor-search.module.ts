import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorSearchPageRoutingModule } from './doctor-search-routing.module';

import { DoctorSearchPage } from './doctor-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorSearchPageRoutingModule
  ],
  declarations: [DoctorSearchPage]
})
export class DoctorSearchPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorSearchFormPageRoutingModule } from './doctor-search-form-routing.module';

import { DoctorSearchFormPage } from './doctor-search-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorSearchFormPageRoutingModule
  ],
  declarations: [DoctorSearchFormPage]
})
export class DoctorSearchFormPageModule {}

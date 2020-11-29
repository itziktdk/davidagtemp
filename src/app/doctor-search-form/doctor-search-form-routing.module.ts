import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorSearchFormPage } from './doctor-search-form.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorSearchFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorSearchFormPageRoutingModule {}

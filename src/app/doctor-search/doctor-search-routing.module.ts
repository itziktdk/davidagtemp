import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorSearchPage } from './doctor-search.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorSearchPageRoutingModule {}

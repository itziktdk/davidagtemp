import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Regform3Page } from './regform3.page';

const routes: Routes = [
  {
    path: '',
    component: Regform3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Regform3PageRoutingModule {}

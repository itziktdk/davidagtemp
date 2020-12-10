import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { register1Page } from './register1.page';

const routes: Routes = [
  {
    path: '',
    component: register1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class register1PageRoutingModule {}

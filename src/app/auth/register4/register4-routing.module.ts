import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { register4Page } from './register4.page';

const routes: Routes = [
  {
    path: '',
    component: register4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class register4PageRoutingModule {}

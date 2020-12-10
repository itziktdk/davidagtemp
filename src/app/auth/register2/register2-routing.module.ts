import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { register2Page } from './register2.page';

const routes: Routes = [
  {
    path: '',
    component: register2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class register2PageRoutingModule {}

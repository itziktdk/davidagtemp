import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { register5Page } from './register5.page';

const routes: Routes = [
  {
    path: '',
    component: register5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class register5PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { register3Page } from './register3.page';

const routes: Routes = [
  {
    path: '',
    component: register3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class register3PageRoutingModule {}

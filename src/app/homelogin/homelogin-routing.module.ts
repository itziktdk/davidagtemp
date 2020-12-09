import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeloginPage } from './homelogin.page';

const routes: Routes = [
  {
    path: '',
    component: homeloginPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class homeloginPageRoutingModule {}

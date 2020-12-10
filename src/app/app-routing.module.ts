import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pharmacies',
    loadChildren: () => import('./pharmacies/pharmacies.module').then( m => m.PharmaciesPageModule)
  },
  {
    path: 'pharmodal',
    loadChildren: () => import('./modals/pharmodal/pharmodal.module').then( m => m.PharmodalPageModule)
  },
  {
    path: 'doctors',
    loadChildren: () => import('./doctors/doctors.module').then( m => m.DoctorsPageModule)
  },
  {
    path: 'docmodal',
    loadChildren: () => import('./modals/docmodal/docmodal.module').then( m => m.DocmodalPageModule)
  },
  {
    path: 'ourproducts',
    loadChildren: () => import('./ourproducts/ourproducts.module').then( m => m.OurproductsPageModule)
  },
  {
    path: 'license',
    loadChildren: () => import('./license/license.module').then( m => m.LicensePageModule)
  },
  {
    path: 'productmodal',
    loadChildren: () => import('./modals/productmodal/productmodal.module').then( m => m.ProductmodalPageModule)
  },
  {
    path: 'homelogin',
    loadChildren: () => import('./homelogin/homelogin.module').then( m => m.homeloginPageModule)
  },
  {
    path: 'register1',
    loadChildren: () => import('./auth/register1/register1.module').then( m => m.register1PageModule)
  },
  {
    path: 'regsiter2',
    loadChildren: () => import('./auth/register2/register2.module').then( m => m.register2PageModule)
  },
  {
    path: 'regsiter3',
    loadChildren: () => import('./auth/register3/register3.module').then( m => m.register3PageModule)
  },
  {
    path: 'regsiter4',
    loadChildren: () => import('./auth/register4/register4.module').then( m => m.register4PageModule)
  },
  {
    path: 'regsiter5',
    loadChildren: () => import('./auth/register5/register5.module').then( m => m.register5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


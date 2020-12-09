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
    path: 'resiter1',
    loadChildren: () => import('./auth/register1/register1.module').then( m => m.Register1PageModule)
  },
  {
    path: 'resiter2',
    loadChildren: () => import('./auth/register2/register2.module').then( m => m.Register2PageModule)
  },
  {
    path: 'resiter3',
    loadChildren: () => import('./auth/register3/register3.module').then( m => m.Register3PageModule)
  },
  {
    path: 'resiter4',
    loadChildren: () => import('./auth/register4/register4.module').then( m => m.Register4PageModule)
  },
  {
    path: 'resiter5',
    loadChildren: () => import('./auth/register5/register5.module').then( m => m.Register5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

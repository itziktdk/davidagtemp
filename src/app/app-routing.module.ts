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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

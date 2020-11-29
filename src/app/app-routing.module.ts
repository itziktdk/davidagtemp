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
    path: 'reset',
    loadChildren: () => import('./auth/reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'register1',
    loadChildren: () => import('./auth/register1/register1.module').then( m => m.Register1PageModule)
  },
  {
    path: 'register2',
    loadChildren: () => import('./auth/register2/register2.module').then( m => m.Register2PageModule)
  },
  {
    path: 'register3',
    loadChildren: () => import('./auth/register3/register3.module').then( m => m.Register3PageModule)
  },
  {
    path: 'register4',
    loadChildren: () => import('./auth/register4/register4.module').then( m => m.Register4PageModule)
  },
  {
    path: 'register5',
    loadChildren: () => import('./auth/register5/register5.module').then( m => m.Register5PageModule)
  },
  {
    path: 'personalarea',
    loadChildren: () => import('./auth/personalarea/personalarea.module').then( m => m.PersonalareaPageModule)
  },
  {
    path: 'personalinformation',
    loadChildren: () => import('./auth/personalinformation/personalinformation.module').then( m => m.PersonalinformationPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./qrcode/qrcode.module').then( m => m.QrcodePageModule)
  },
  {
    path: 'doctor-search',
    loadChildren: () => import('./doctor-search/doctor-search.module').then( m => m.DoctorSearchPageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)
  },
  {
    path: 'doctor-search-form',
    loadChildren: () => import('./doctor-search-form/doctor-search-form.module').then( m => m.DoctorSearchFormPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

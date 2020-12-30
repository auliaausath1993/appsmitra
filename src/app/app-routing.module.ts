import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: 'login', 
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  { 
    path: 'register', 
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  { 
    path: 'success', 
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  },
  { 
    path: 'syarat', 
    loadChildren: () => import('./syarat/syarat.module').then( m => m.SyaratPageModule)
  },
  { 
    path: 'indexmenu', 
    loadChildren: () => import('./indexmenu/indexmenu.module').then( m => m.IndexmenuPageModule)
  },
  { 
    path: 'profile', 
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  { 
    path: 'formprofile', 
    loadChildren: () => import('./profile/form-profile/formprofile.module').then( m => m.FormProfilePageModule)
  },
  { 
    path: 'order', 
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  { 
    path: 'history', 
    loadChildren: () => import('./history/history.module').then( m => m.HistoryOrderPageModule)
  },
  { 
    path: 'detailorder', 
    loadChildren: () => import('./detailorder/detailorder.module').then( m => m.DetailorderPageModule)
  },
  { 
    path: 'verifyorder', 
    loadChildren: () => import('./varify-order/varify-order.module').then( m => m.VerificationOrderPageModule)
  },
  { 
    path: 'verifyorder-success', 
    loadChildren: () => import('./varify-order/verify-success/verify-success-routing.module').then( m => m.VerifySuccessPageRoutingModule)
  },
  { 
    path: 'marker', 
    loadChildren: () => import('./map/marker/marker.module').then( m => m.MarkerPageModule)
  },
  {
    path: 'privasi',
    loadChildren: () => import('./privasi/privasi.module').then( m => m.PrivasiPageModule)
  },
  {
    path: 'syaratketentuan',
    loadChildren: () => import('./syaratketentuan/syaratketentuan.module').then( m => m.SyaratketentuanPageModule)
  },
  {
    path: 'tentangkami',
    loadChildren: () => import('./tentangkami/tentangkami.module').then( m => m.TentangkamiPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

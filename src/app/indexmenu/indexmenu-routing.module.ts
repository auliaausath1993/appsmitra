import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexmenuPage } from './indexmenu.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: IndexmenuPage,
    children:[
      {
        path:'history',
        children:[
          {
            path:'',
            loadChildren: () => import('../history/history.module').then( m => m.HistoryOrderPageModule)
          }
        ]
      },
      {
        path:'order',
        children:[
          {
            path:'',
            loadChildren: () => import('../order/order.module').then( m => m.OrderPageModule)
          }
        ]
      },
      {
        path:'profile',
        children:[
          {
            path:'',
            loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },{
        path:'',
        redirectTo:'tabs/order',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'tabs/order',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexmenuPageRoutingModule {}

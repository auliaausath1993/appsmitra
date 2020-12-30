import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyOrderPage } from './varify-order.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyOrderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyOrderPageRoutingModule {}

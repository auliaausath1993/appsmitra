import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifySuccessPage } from './verify-success.page';

const routes: Routes = [
  {
    path: '',
    component: VerifySuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifySuccessPageRoutingModule {}

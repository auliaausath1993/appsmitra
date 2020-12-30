import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryOrderPage } from './history.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryOrderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryOrderPageRoutingModule {}

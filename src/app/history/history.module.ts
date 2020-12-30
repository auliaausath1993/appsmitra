import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HistoryOrderPage } from './history.page';

import { HistoryOrderPageRoutingModule } from './history-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HistoryOrderPageRoutingModule
  ],
  declarations: [HistoryOrderPage]
})
export class HistoryOrderPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { VerifyOrderPage } from './varify-order.page';

import { VerifyOrderPageRoutingModule } from './varify-order-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyOrderPageRoutingModule
  ],
  declarations: [VerifyOrderPage]
})
export class VerificationOrderPageModule {}

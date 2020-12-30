import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifySuccessPageRoutingModule } from './verify-success-routing.module';

import { VerifySuccessPage } from './verify-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifySuccessPageRoutingModule
  ],
  declarations: [VerifySuccessPage]
})
export class OrderSuccessPageModule {}

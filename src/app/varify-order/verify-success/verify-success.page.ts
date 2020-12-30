import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-verify-success',
  templateUrl: './verify-success.page.html',
  styleUrls: ['./verify-success.page.scss'],
})
export class VerifySuccessPage implements OnInit {

  constructor(
    private navCtrl : NavController
  ) { }

  ngOnInit() {
  }

  order(){
    this.navCtrl.navigateRoot('/indexmenu/tabs/order')
  }

}

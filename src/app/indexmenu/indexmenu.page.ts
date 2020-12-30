import { Component } from '@angular/core';
import { Platform,NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import {  OnInit, OnDestroy, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-indexmenu',
  templateUrl: 'indexmenu.page.html',
  styleUrls: ['indexmenu.page.scss'],
})
export class IndexmenuPage implements OnInit, OnDestroy, AfterViewInit {
  backButtonSubscription;  

  constructor(
    private nav:NavController,
    private router: Router,
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      navigator['app'].exitApp();
    });
  }
  
  public home = function(){
    this.router.navigateByUrl('/order');
  }

  ngOnInit() { }
  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }
}

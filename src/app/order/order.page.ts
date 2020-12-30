import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from './../servive/service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Platform,NavController,LoadingController,ToastController} from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: 'order.page.html',
  styleUrls: ['order.page.scss'],
})
export class OrderPage {
  list_data: string = "list-1";
  id:any;
  set_data:any;
  dataform:any;
  ParamQuery:any;
  data:any;
  constructor(
    private nav:NavController,
    private router: Router,
    private formBuilder:FormBuilder,
    private serviceService : ServiceService,
    public route: ActivatedRoute,
    public loadingController : LoadingController,
    public toastController : ToastController,
  ) {}

  ngOnInit() 
  {
    this.serviceService.CekUser().subscribe(data=>{
      this.set_data = data;
      this.id = this.set_data.data.partner_id;
      if(this.id===undefined||this.id===null||this.id===''){
        this.serviceService.logout();
      }
      this.GetData(this.id,'Pending');
    });
  }

  // async ionViewWillEnter() {
  //   const loading = await this.loadingController.create({
  //     message : 'Please wait...'
  //   });
  //   await loading.present();
  //   this.serviceService.CekUser().subscribe(data=>{
  //     this.set_data = data;
  //     this.id = this.set_data.data.partner_id;
  //     if(this.id===undefined||this.id===null||this.id===''){
  //       this.serviceService.logout();
  //     }
  //     this.GetData(this.id,'Pending');
  //   });
    
  //   loading.dismiss();
  // }

  async GetData(id,status){
    const loading = await this.loadingController.create({
      message : 'Please wait...'
    });

    await loading.present();
    this.ParamQuery = {
      'status':status,
      'id':id
    };
    this.serviceService.getOrder(this.ParamQuery, 'orders_no_partner').subscribe(
      data => {
        console.log(JSON.stringify(data));
          this.dataform = data;
          if(this.dataform.status !== 'success') {
              loading.dismiss();
            }else{
              loading.dismiss();
              this.data = this.dataform.data;
            }
      },
      error => {
          loading.dismiss();
        }
    );
  }

  goDetail(order_id){
    this.router.navigate(['/detailorder', {order_id:order_id, order : true}]);
   // this.nav.navigateForward('detailorder',navigationExtras);
  }
}

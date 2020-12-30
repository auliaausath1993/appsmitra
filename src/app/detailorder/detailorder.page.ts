import { Component } from '@angular/core';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import { ServiceService } from './../servive/service.service';
import { Platform,NavController,LoadingController,ToastController} from '@ionic/angular';

@Component({
  selector: 'app-detailorder',
  templateUrl: 'detailorder.page.html',
  styleUrls: ['detailorder.page.scss'],
})
export class DetailorderPage {

  order_id;
  partner_id:any;
  set_data:any;
  ParamQuery:any;
  dataform:any;
  orderDetail : boolean = false;

  nama;
  service_type;
  date_order;
  date_finish;
  alamat;
  status;
  photo;
  latitude;
  longitude;
  phone;
  qty;

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private serviceService : ServiceService,
    public loadingController : LoadingController,
    public nav : NavController,
  ) {}
  ngOnInit() {
    if(this.router.getCurrentNavigation().extras.state)
    {
      this.order_id= this.router.getCurrentNavigation().extras.state.order_id;
    }
    else 
    {      
      this.order_id= this.route.snapshot.params.order_id;
      this.orderDetail = this.route.snapshot.params.order;
    }

    this.serviceService.CekUser().subscribe(data=>{
      this.set_data = data;
      this.partner_id = this.set_data.data.partner_id;
      if(this.partner_id===undefined||this.partner_id===null||this.partner_id===''){
        this.serviceService.logout();
      }
      this.setDetail(this.order_id);
    });
  }
  
  set;
  async setDetail(id){
    const loading = await this.loadingController.create({
      message : 'Please wait...'
    });

    await loading.present();
    this.ParamQuery = {
      'order_id':id
    };
    this.serviceService.getOrder(this.ParamQuery, 'order_detail').subscribe(
      data => {
          this.dataform = data;
          if(this.dataform.status !== 'success') {
            loading.dismiss();
          }else{
            loading.dismiss();
            this.set = this.dataform.data;

            this.nama = this.set.nama;
            this.service_type = this.set.service_type;
            this.alamat = this.set.alamat;
            this.date_order = this.set.date_order;
            this.status = this.set.status;
            this.photo= "../../assets/images/"+this.set.photo;
            this.latitude = this.set.latitude;
            this.longitude = this.set.longitude;
            this.phone = this.set.phone;
            this.qty = this.set.qty;
          }
      },
      error => {
          loading.dismiss();
        }
    );
  }

  goMap(lat, lon){
    let navigationExtras : NavigationExtras = {
      // state : {
      //   latitude:lat,
      //   longitude:lon
      // },
      queryParams: {
        latitude:lat,
        longitude:lon
      }
    }
    this.nav.navigateForward(['marker'], navigationExtras);
  }

  back() {
      this.router.navigate(['/indexmenu']);
  }

  Varify() 
  {
    this.router.navigate(['/verifyorder', {order_id:this.order_id, partner_id : this.partner_id}]);
  }
}

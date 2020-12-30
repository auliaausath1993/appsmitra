import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ServiceService } from './../servive/service.service';
import { Platform, NavController, LoadingController, ToastController, ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { Crop } from '@ionic-native/crop/ngx';

@Component({
  selector: 'app-varify-order',
  templateUrl: 'varify-order.page.html',
  styleUrls: ['varify-order.page.scss'],
})
export class VerifyOrderPage {

  order_id: string;
  partner_id: string;
  set_data: any;
  imageURI:any;
  imageFileName:any;
  GetImageNameUpload:any;
  base64Image : any;
  picture:any;
  alamat:any;
  dataform:any;
  
  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.order_id = this.router.getCurrentNavigation().extras.state.order_id;
    }
    else {
      this.order_id = this.route.snapshot.params.order_id;
    }
    this.serviceService.CekUser().subscribe(data => {
      this.set_data = data;
      this.partner_id = this.set_data.data.partner_id;
      if (this.partner_id === undefined || this.partner_id === null || this.partner_id === '') {
        this.serviceService.logout();
      }
    });
  }
  
  croppedImagePath:any=[];
  defaultImage = "assets/placeholder.png";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private camera: Camera,
    private crop: Crop,
    private serviceService : ServiceService, public toastController : ToastController,
    public actionSheetController: ActionSheetController, public loadingController : LoadingController,
    private file: File
  ) { }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.cropImage(imageData)
    }, (err) => {
      // Handle error
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  cropImage(fileUrl) {
    this.crop.crop(fileUrl, { quality: 50 })
      .then(
        newPath => {
          this.showCroppedImage(newPath.split('?')[0])
        },
        error => {
          alert('Error cropping image' + error);
        }
      );
  }

  showCroppedImage(ImagePath) {
    this.isLoading = true;
    var copyPath = ImagePath;
    var splitPath = copyPath.split('/');
    var imageName = splitPath[splitPath.length - 1];
    var filePath = ImagePath.split(imageName)[0];

    this.file.readAsDataURL(filePath, imageName).then(base64 => {
      this.croppedImagePath.push(base64);
      this.isLoading = false;
    }, error => {
      alert('Error in showing image' + error);
      this.isLoading = false;
    });
  }

  async SaveFunc(){
    const loading = await this.loadingController.create({
      message : 'Please wait...'
    });

    let param = {
      images : this.showCroppedImage,
      partner_id : this.partner_id,
      order_id : this.order_id
    }

    await loading.present();
    this.serviceService.SaveBookService(param, 'order_verifikasi').subscribe(
      data => {
        console.log(JSON.stringify(data));
          this.dataform = data;
          if(this.dataform.status !== 'success') {
              let message='Tidak dapat memproses permintaan anda';
              this.presentToast(message)
              loading.dismiss();
            }else{
              let message='Verifikasi Order berhasil disimpan';
              this.presentToast(message)
              loading.dismiss();
              this.router.navigate(['/verifyorder-success', {order_id:this.dataform.order_id}]);
              // this.router.navigateByUrl('/indexmenu/tabs/order');
              // this.router.navigateByUrl('/detailorder');
            }
      },
      error => {
        console.log(JSON.stringify(error));
        
            let message='Tidak dapat memproses permintaan anda';
            console.log(message)
            this.presentToast(message);
          loading.dismiss();
        }
    );
  }

  async presentToast(Message) {
    const toast = await this.toastController.create({
      message : Message,
      duration: 2500,
      position : "bottom"
    });
    toast.present();
  }

  back() {
    this.router.navigate(['/indexmenu']);
  }
}

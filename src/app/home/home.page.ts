import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}


  goPharmacies()
  {
    this.navCtrl.navigateForward('pharmacies');
  }

  goDoctors()
  {
    this.navCtrl.navigateForward('doctors');
  }

  goProducts()
  {
    this.navCtrl.navigateForward('ourproducts');
  }

  goLicense()
  {
    this.navCtrl.navigateForward('license');
  }
  goLogin()
  {
    this.navCtrl.navigateForward('homelogin');
  }
  goDocs()
  {
    this.navCtrl.navigateForward('regform3');
  }
}

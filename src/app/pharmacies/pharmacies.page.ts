import { PharmodalPage } from './../modals/pharmodal/pharmodal.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.page.html',
  styleUrls: ['./pharmacies.page.scss'],
})
export class PharmaciesPage implements OnInit {

  category:any = "s1";
  constructor(private navCtrl: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    this.category = ev.detail.value;
    console.log(this.category);
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: PharmodalPage,
      backdropDismiss: true
    });

    return await modal.present();
  }
  
  goHome()
  {
    this.navCtrl.navigateBack('home');
  }
}

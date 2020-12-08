import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-docmodal',
  templateUrl: './docmodal.page.html',
  styleUrls: ['./docmodal.page.scss'],
})
export class DocmodalPage implements OnInit {
  name;
  phone;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close()
  {
    this.modalCtrl.dismiss();
  }

}

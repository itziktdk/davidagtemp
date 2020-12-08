import { DocmodalPage } from './../modals/docmodal/docmodal.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss'],
})
export class DoctorsPage implements OnInit {
  filterTerm: string;
  constructor(private navCtrl: NavController, private modalCtrl: ModalController) { }

userRecords = [{
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    email: 'Shanna@melissa.tv'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    email: 'Nathan@yesenia.net'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    email: 'Julianne.OConner@kory.org'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    email: 'Lucio_Hettinger@annie.ca'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    email: 'Karley_Dach@jasper.info'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    email: 'Telly.Hoeger@billy.biz'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    email: 'Sherwood@rosamond.me'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    email: 'Chaim_McDermott@dana.io'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    email: 'Rey.Padberg@karina.biz'
  }
];



  ngOnInit() {
  }



  async showModal() {
    const modal = await this.modalCtrl.create({
      component: DocmodalPage,
      backdropDismiss: true,
      componentProps: {
        foo: 'hello',
        bar: 'world'
      }
    });

    return await modal.present();
  }


  

  goHome()
  {
    this.navCtrl.navigateBack('home');
  }

}

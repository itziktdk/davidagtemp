import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.page.html',
  styleUrls: ['./register1.page.scss'],
})
export class register1Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
register2()
{
  this.navCtrl.navigateForward('register2');
}
}


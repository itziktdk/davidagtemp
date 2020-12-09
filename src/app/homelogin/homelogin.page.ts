import { Component } from '@angular/core';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homelogin',
  templateUrl: './homelogin.page.html',
  styleUrls: ['./homelogin.page.scss'],
})
export class homeloginPage {

  constructor(private navCtrl: NavController) {}

  goFurther(){
    console.log("click test")
  }
register1()
{
  this.navCtrl.navigateForward('register1');
}
}

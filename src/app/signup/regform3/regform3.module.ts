import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Regform3PageRoutingModule } from './regform3-routing.module';
import { Regform3Page } from './regform3.page';
import { FormatFileSizePipe } from './format-file-size.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Regform3PageRoutingModule
  ],
  declarations: [Regform3Page, FormatFileSizePipe]
})
export class Regform3PageModule {}

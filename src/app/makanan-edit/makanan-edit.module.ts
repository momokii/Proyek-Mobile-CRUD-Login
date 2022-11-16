import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakananEditPageRoutingModule } from './makanan-edit-routing.module';

import { MakananEditPage } from './makanan-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakananEditPageRoutingModule
  ],
  declarations: [MakananEditPage]
})
export class MakananEditPageModule {}

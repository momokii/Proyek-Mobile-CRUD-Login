import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakananTambahPageRoutingModule } from './makanan-tambah-routing.module';

import { MakananTambahPage } from './makanan-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakananTambahPageRoutingModule
  ],
  declarations: [MakananTambahPage]
})
export class MakananTambahPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakananlistPageRoutingModule } from './makananlist-routing.module';

import { MakananlistPage } from './makananlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakananlistPageRoutingModule
  ],
  declarations: [MakananlistPage]
})
export class MakananlistPageModule {}

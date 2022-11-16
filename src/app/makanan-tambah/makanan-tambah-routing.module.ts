import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakananTambahPage } from './makanan-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: MakananTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakananTambahPageRoutingModule {}

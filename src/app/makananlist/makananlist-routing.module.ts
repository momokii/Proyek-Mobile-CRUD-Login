import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakananlistPage } from './makananlist.page';

const routes: Routes = [
  {
    path: '',
    component: MakananlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakananlistPageRoutingModule {}

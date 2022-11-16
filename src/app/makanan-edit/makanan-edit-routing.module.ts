import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakananEditPage } from './makanan-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MakananEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakananEditPageRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// tambahan
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'makanan',
    loadChildren: () => import('./makananlist/makananlist.module').then(m => m.MakananlistPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'makananlist',
    loadChildren: () => import('./makananlist/makananlist.module').then( m => m.MakananlistPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'makanan-tambah',
    loadChildren: () => import('./makanan-tambah/makanan-tambah.module').then( m => m.MakananTambahPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'makanan-edit/:id',
    loadChildren: () => import('./makanan-edit/makanan-edit.module').then( m => m.MakananEditPageModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

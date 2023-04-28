import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,

  children: [
    {
      path: '',
      loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'productos',
      loadChildren: () => import('../productos/productos.module').then( m => m.ProductosPageModule)
    },
    {
      path: 'login',
      loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
    },
    {
      path: 'register',
      loadChildren: () => import('../register/register.module').then( m => m.RegisterPageModule)
    },
    {
      path: 'deportivo',
      loadChildren: () => import('../deportivo/deportivo.module').then( m => m.DeportivoPageModule)
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}

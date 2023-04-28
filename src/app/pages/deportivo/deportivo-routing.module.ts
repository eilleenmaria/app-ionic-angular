import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeportivoPage } from './deportivo.page';

const routes: Routes = [
  {
    path: '',
    component: DeportivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeportivoPageRoutingModule {}

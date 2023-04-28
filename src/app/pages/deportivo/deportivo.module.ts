import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeportivoPageRoutingModule } from './deportivo-routing.module';

import { DeportivoPage } from './deportivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeportivoPageRoutingModule
  ],
  declarations: [DeportivoPage]
})
export class DeportivoPageModule {}

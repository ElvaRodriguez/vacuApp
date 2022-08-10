import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoVacunasPageRoutingModule } from './listado-vacunas-routing.module';

import { ListadoVacunasPage } from './listado-vacunas.page';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ListadoVacunasPageRoutingModule
  ],
  declarations: [ListadoVacunasPage]
})
export class ListadoVacunasPageModule {}

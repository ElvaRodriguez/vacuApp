import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoEnfermedadesPageRoutingModule } from './listado-enfermedades-routing.module';

import { ListadoEnfermedadesPage } from './listado-enfermedades.page';

import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ListadoEnfermedadesPageRoutingModule
  ],
  declarations: [ListadoEnfermedadesPage]
})
export class ListadoEnfermedadesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnfermedadPageRoutingModule } from './enfermedad-routing.module';

import { EnfermedadPage } from './enfermedad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnfermedadPageRoutingModule
  ],
  declarations: [EnfermedadPage]
})
export class EnfermedadPageModule {}

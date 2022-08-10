import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoEnfermedadesPage } from './listado-enfermedades.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoEnfermedadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoEnfermedadesPageRoutingModule {}

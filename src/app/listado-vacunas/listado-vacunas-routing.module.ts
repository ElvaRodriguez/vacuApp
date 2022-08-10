import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoVacunasPage } from './listado-vacunas.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoVacunasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoVacunasPageRoutingModule {}

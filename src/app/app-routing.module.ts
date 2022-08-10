import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'geolocation',
    loadChildren: () => import('./geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },
  {
    path: 'vacuna/:id',
    loadChildren: () => import('./vacuna/vacuna.module').then( m => m.VacunaPageModule)
  },
  {
    path: 'listado-vacunas',
    loadChildren: () => import('./listado-vacunas/listado-vacunas.module').then( m => m.ListadoVacunasPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'enfermedad',
    loadChildren: () => import('./enfermedad/enfermedad.module').then( m => m.EnfermedadPageModule)
  },
  {
    path: 'listado-enfermedades',
    loadChildren: () => import('./listado-enfermedades/listado-enfermedades.module').then( m => m.ListadoEnfermedadesPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

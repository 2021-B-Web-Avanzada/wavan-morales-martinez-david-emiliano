import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaConcesionariosComponent } from './rutas/ruta-concesionarios/ruta-concesionarios.component';

const routes: Routes = [
  {
    path: 'concesionarios',
    component: RutaConcesionariosComponent
  },
  {
    path: '',
    redirectTo: '/concesionarios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { useHash: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

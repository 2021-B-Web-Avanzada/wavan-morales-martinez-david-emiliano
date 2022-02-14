import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaAutosCrearComponent } from './rutas/ruta-autos-crear/ruta-autos-crear.component';
import { RutaAutosEditarComponent } from './rutas/ruta-autos-editar/ruta-autos-editar.component';
import { RutaAutosComponent } from './rutas/ruta-autos/ruta-autos.component';
import { RutaConcesionariosCrearComponent } from './rutas/ruta-concesionarios-crear/ruta-concesionarios-crear.component';
import { RutaConcesionariosEditarComponent } from './rutas/ruta-concesionarios-editar/ruta-concesionarios-editar.component';
import { RutaConcesionariosComponent } from './rutas/ruta-concesionarios/ruta-concesionarios.component';

const routes: Routes = [
  {
    path: 'concesionarios',
    component: RutaConcesionariosComponent
  },
  {
    path: '',
    redirectTo: 'concesionarios',
    pathMatch: 'full'
  },
  {
    path:'editar/concesionario/:nombreConcesionario',
    component: RutaConcesionariosEditarComponent
  },
  {
    path: 'crear/concesionario',
    component: RutaConcesionariosCrearComponent
  },
  {
    path: 'autos/:nombreConcesionario',
    component: RutaAutosComponent
  },
  {
    path:'editar/auto/:modelo',
    component: RutaAutosEditarComponent
  },
  {
    path: 'crear/auto',
    component: RutaAutosCrearComponent
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

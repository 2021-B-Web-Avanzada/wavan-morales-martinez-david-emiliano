import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaGameComponent } from './rutas/ruta-game/ruta-game.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaStartComponent } from './rutas/ruta-start/ruta-start.component';

const routes: Routes = [
  {
    path: 'start',
    component: RutaStartComponent
  },
  {
    path: 'game/:salaId/:nombre',
    component: RutaGameComponent
  },
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {

    path: '**',
    component: RutaNotFoundComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

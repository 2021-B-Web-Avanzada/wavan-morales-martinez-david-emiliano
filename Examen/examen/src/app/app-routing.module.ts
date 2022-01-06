import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { RutaCuentaComponent } from './rutas/ruta-cuenta/ruta-cuenta.component'
import { RutaEsportsComponent } from './rutas/ruta-esports/ruta-esports.component'
import { RutaJuegosComponent } from './rutas/ruta-juegos/ruta-juegos.component'
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component'
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component'
import { RutaNoticiasComponent } from './rutas/ruta-noticias/ruta-noticias.component'
import { RutaTiendaComponent } from './rutas/ruta-tienda/ruta-tienda.component'

const routes: Routes = [
  {
    path: 'login',
    component: RutaLoginComponent,
  },
  {
    path: 'not-found',
    component: RutaNotFoundComponent,
  },
  {
    path: 'juegos',
    component: RutaJuegosComponent,
  },
  {
    path: 'tienda',
    component: RutaTiendaComponent,
  },
  {
    path: 'noticias',
    component: RutaNoticiasComponent,
  },
  {
    path: 'esports',
    component: RutaEsportsComponent,
  },
  {
    path: 'cuenta',
    component: RutaCuentaComponent,
  },
  {
    path: 'asistencia',
    component: RutaAsistenciaComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

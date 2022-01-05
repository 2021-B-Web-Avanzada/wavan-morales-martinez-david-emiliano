import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaJuegosComponent } from './rutas/ruta-juegos/ruta-juegos.component';
import { RutaTiendaComponent } from './rutas/ruta-tienda/ruta-tienda.component';
import { RutaEsportsComponent } from './rutas/ruta-esports/ruta-esports.component';
import { RutaNoticiasComponent } from './rutas/ruta-noticias/ruta-noticias.component';
import { RutaCuentaComponent } from './rutas/ruta-cuenta/ruta-cuenta.component';
import { RutaAsistenciaComponent } from './rutas/ruta-asistencia/ruta-asistencia.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaNotFoundComponent,
    RutaJuegosComponent,
    RutaTiendaComponent,
    RutaEsportsComponent,
    RutaNoticiasComponent,
    RutaCuentaComponent,
    RutaAsistenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    //Componente Principal
    AppComponent]
})
export class AppModule { }

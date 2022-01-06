import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';

import { RutaCuentaComponent } from './rutas/ruta-cuenta/ruta-cuenta.component';
import { PortadaJuegoComponent } from './componentes/portada-juego/portada-juego.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaNotFoundComponent,
    RutaCuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortadaJuegoComponent
  ],
  providers: [],
  bootstrap: [
    //Componente Principal
    AppComponent]
})
export class AppModule { }

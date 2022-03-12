import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaStartComponent } from './rutas/ruta-start/ruta-start.component';
import { RutaGameComponent } from './rutas/ruta-game/ruta-game.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { SocketIoModule } from 'ngx-socket-io';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RutaStartComponent,
    RutaGameComponent,
    RutaNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot({
      url: 'ws://localhost:8080',
      options:{}
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

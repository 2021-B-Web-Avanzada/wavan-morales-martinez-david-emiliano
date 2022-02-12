import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaConcesionariosComponent } from './rutas/ruta-concesionarios/ruta-concesionarios.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaConcesionariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

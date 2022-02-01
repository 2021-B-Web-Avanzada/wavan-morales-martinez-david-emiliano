import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaRegisterComponent } from './rutas/ruta-register/ruta-register.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaSearchComponent } from './rutas/ruta-search/ruta-search.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaRegisterComponent,
    RutaHomeComponent,
    RutaSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

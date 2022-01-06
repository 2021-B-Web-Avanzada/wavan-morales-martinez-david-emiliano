import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaDownloadComponent } from './rutas/ruta-download/ruta-download.component';
import { RutaContactComponent } from './rutas/ruta-contact/ruta-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaDownloadComponent,
    RutaContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

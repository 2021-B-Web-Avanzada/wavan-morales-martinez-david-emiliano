import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaDownloadComponent } from './rutas/ruta-download/ruta-download.component';
import { RutaContactComponent } from './rutas/ruta-contact/ruta-contact.component';
import { CardsModule } from './componentes/cards/cards.module';
import { SocialsModule } from './componentes/socials/socials.module';
import { PosterModule } from './componentes/poster/poster.module';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { SlidesModule } from './componentes/slides/slides.module';

@NgModule({
  declarations: [
    AppComponent,
    RutaDownloadComponent,
    RutaContactComponent,
    RutaHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsModule,
    SocialsModule,
    PosterModule,
    SlidesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

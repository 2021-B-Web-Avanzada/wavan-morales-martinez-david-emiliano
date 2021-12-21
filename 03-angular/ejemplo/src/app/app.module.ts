import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaForbiddenComponent } from './rutas/ruta-forbidden/ruta-forbidden.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaPostComponent } from './rutas/ruta-post/ruta-post.component';
import { RutaAppComponent } from './rutas/ruta-app/ruta-app.component';
import { AuthService } from './servicios/auth/auth.service';
import { EstaLogeadoGuard } from './servicios/auth/esta-logeado.guard';
import { EsAdministradorGuard } from './servicios/auth/es-administrador.guard';
import { BannerImagenesModule } from './componentes/banner-imagenes/banner-imagenes.module';


@NgModule({
  declarations: [
    // Componentes
    AppComponent,
    RutaLoginComponent,
    RutaForbiddenComponent,
    RutaNotFoundComponent,
    RutaInicioComponent,
    RutaUsuarioComponent,
    RutaPostComponent,
    RutaAppComponent
  ],
  imports: [
    // Módulos
    BrowserModule,
    AppRoutingModule,
    BannerImagenesModule
  ],
  providers: [
    //Servicios
    AuthService,
    EstaLogeadoGuard,
    EsAdministradorGuard
  ],
  bootstrap: [
    // Componente principal
    AppComponent]
})
export class AppModule { }

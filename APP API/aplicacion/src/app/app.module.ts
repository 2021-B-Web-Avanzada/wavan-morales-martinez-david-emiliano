import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardConcesionarioModule } from './componentes/card-concesionario/card-concesionario.module';
import { RutaConcesionariosComponent } from './rutas/ruta-concesionarios/ruta-concesionarios.component';
import { RutaConcesionariosCrearComponent } from './rutas/ruta-concesionarios-crear/ruta-concesionarios-crear.component';
import { RutaConcesionariosEditarComponent } from './rutas/ruta-concesionarios-editar/ruta-concesionarios-editar.component';
import { RutaAutosComponent } from './rutas/ruta-autos/ruta-autos.component';
import { RutaAutosCrearComponent } from './rutas/ruta-autos-crear/ruta-autos-crear.component';
import { RutaAutosEditarComponent } from './rutas/ruta-autos-editar/ruta-autos-editar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RutaConcesionariosComponent,
    RutaConcesionariosCrearComponent,
    RutaConcesionariosEditarComponent,
    RutaAutosComponent,
    RutaAutosCrearComponent,
    RutaAutosEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardConcesionarioModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

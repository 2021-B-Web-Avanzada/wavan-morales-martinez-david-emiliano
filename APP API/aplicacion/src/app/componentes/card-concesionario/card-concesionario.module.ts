import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardConcesionarioComponent } from './card-concesionario/card-concesionario.component';
import { RutaConcesionariosEditarComponent } from 'src/app/rutas/ruta-concesionarios-editar/ruta-concesionarios-editar.component';
import { AppComponent } from 'src/app/app.component';



@NgModule({
  declarations: [
    CardConcesionarioComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardConcesionarioComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class CardConcesionarioModule { }

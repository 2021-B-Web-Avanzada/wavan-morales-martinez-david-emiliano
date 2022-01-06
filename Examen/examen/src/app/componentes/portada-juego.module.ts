import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortadaJuegoComponent } from './portada-juego/portada-juego.component';



@NgModule({
  declarations: [
    PortadaJuegoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PortadaJuegoComponent
  ]
})
export class PortadaJuegoModule { }

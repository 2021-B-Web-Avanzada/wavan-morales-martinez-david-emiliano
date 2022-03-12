import { Component, OnInit } from '@angular/core';
import { WebsocketsService } from 'src/app/servicios/websockets/websockets.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-ruta-start',
  templateUrl: './ruta-start.component.html',
  styleUrls: ['./ruta-start.component.scss']
})
export class RutaStartComponent implements OnInit {

  nombre= '';

  // Creación de Sala
  mostrarIdSala = false;

  // Opciones Ingreso a Sala
  ingresarIdSala = false;
  salaId = '';

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit() {
  }

  // Métodos 
  crearJuego() {
    this.mostrarIdSala = !this.mostrarIdSala;
    this.salaId = this.guid()
  }

  unirseJuego() {
    this.ingresarIdSala = !this.ingresarIdSala;
  }

  generarCodigoSala() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }

  // Función para generar el código
  guid = () => (this.generarCodigoSala() + this.generarCodigoSala() + "-" + this.generarCodigoSala()).toLowerCase();

  iniciarJuego() {
    // this.websocketsService.ejecutarEventoConexion(this.nombre)
    const ruta = ['game', this.salaId, this.nombre];
    this.router.navigate(ruta);
  }

}

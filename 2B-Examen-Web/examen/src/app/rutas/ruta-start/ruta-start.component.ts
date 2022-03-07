import { Component, OnInit } from '@angular/core';
import { WebsocketsService } from 'src/app/servicios/websockets/websockets.service';

@Component({
  selector: 'app-ruta-start',
  templateUrl: './ruta-start.component.html',
  styleUrls: ['./ruta-start.component.scss']
})
export class RutaStartComponent implements OnInit {

  constructor(private readonly websocketsService: WebsocketsService) { }

  ngOnInit() {
    this.websocketsService.escucharEventoConexion()
      .subscribe(
        {
          next: (data) => {
            console.log(data);
          },
          error: (error) => {
            console.log({ error })
          }
        }
      )
  }


  eventoConexion() {
    this.websocketsService.ejecutarEventoConexion()
  }

}

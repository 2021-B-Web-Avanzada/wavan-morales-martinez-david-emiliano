import { Component, OnInit } from '@angular/core';
import { WebsocketsService } from './servicios/websockets/websockets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'examen';

  ngOnInit() {

  }

  constructor(
    private readonly websocketsService: WebsocketsService
  ) {
  }

  // eventoConexion() {
  //   this.websocketsService.ejecutarEventoConexion()
  // }
}

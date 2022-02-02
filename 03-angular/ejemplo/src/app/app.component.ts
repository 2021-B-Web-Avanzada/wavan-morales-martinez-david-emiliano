import { Component } from '@angular/core';
import { WebsocketsService } from './servicios/websockets/websockets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejemplo';

  constructor(
    private readonly websocketsService: WebsocketsService
  )
  {

  }
  eventoHola(){
    this.websocketsService.ejecutarEventoHola()
  }
}

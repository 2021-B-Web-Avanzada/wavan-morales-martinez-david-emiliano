import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";


@Injectable({
    providedIn: 'root'
})

export class WebsocketsService {
    constructor(private socket: Socket) {
    }

    ejecutarEventoConexion() {
        const message = this.socket.emit('Conexion', {
            nombre: 'Player'
        });
        console.log(message)
    }

    escucharEventoConexion() {
        return this.socket.fromEvent('escucharEventoConexion');
    }
}


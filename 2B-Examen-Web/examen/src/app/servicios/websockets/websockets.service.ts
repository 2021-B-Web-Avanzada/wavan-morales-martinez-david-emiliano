import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";


@Injectable({
    providedIn: 'any'
})

export class WebsocketsService {
    constructor(private socket: Socket) {
    }

    ejecutarEventoConexion(nombrePlayer: string) {
        const message = this.socket.emit('Conexion', {
            nombre: nombrePlayer
        });
        console.log(message)
    }

    escucharEventoConexion() {
        return this.socket.fromEvent('escucharEventoConexion');
    }


    

    ejecutarEventoUnirseJuego(salaId: string, nombre: string) {
        const message = this.socket.emit('UnirseJuego', {
            salaId,
            nombre
        });
    }

    escucharEventoUnirseJuego() {
        return this.socket.fromEvent('escucharEventoUnirseJuego');
    }

    ejecutarEventoEnviarMensaje(juegoId: string, nombre: string, mensaje: string) {
        const resp = this.socket.emit('EmitirMensaje', {
            juegoId,
            nombre,
            mensaje
        });
    }

    escucharEventoEnviarMensaje() {
        return this.socket.fromEvent('escucharEventoEnviarMensaje');
    }
}


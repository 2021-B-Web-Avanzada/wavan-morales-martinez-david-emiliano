import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";


@Injectable({
    providedIn: 'root'
})

export class WebsocketsService {
    constructor(private socket: Socket) {
    }

    ejecutarEventoHola() {
        const resp = this.socket.emit('hola', {
            nombre: 'David'
        });
        console.log(resp)
    }

    escucharEventoHola() {
        return this.socket.fromEvent('escucharEventoHola');
    }

    ejecutarEventoUnirseSala(salaId: number, nombre: string) {
        // Emitimos un evento
        const resp = this.socket.emit(
            'unirseSala', {
            salaId,
            nombre
        });
    }

    escucharEventoUnirseSala() {
        return this.socket.fromEvent('escucharEventoUnirseSala');
    }

    ejecutarEventoEnviarMensaje(salaId: number, nombre: string, mensaje: string) {
        // Emitimos un evento
        this.socket.emit(
          'enviarMensaje', {
            nombre,
            salaId,
            mensaje
          });
      }
      escucharEventoMensajeSala(){
        return this.socket.fromEvent('escucharEventoMensajeSala')
      }
}


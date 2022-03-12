import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";


@Injectable({
    providedIn: 'any'
})

export class WebsocketsService {
    constructor(private socket: Socket) {
    }

    // Evento para unirme a la sala de juego
    ejecutarEventoUnirseSala(salaId: string, nombrePlayer: string) {
        // Emitimos un evento
        const resp = this.socket.emit('unirseSala', { salaId, nombrePlayer });
    }

    escucharEventoUnirseSala() {
        return this.socket.fromEvent('escucharEventoUnirseSala');
    }

    // Envío de Mensajes
    ejecutarEventoEnviarMensaje(salaId: string, nombrePlayer: string, mensaje: string) {
        this.socket.emit('enviarMensaje', { salaId, nombrePlayer, mensaje });
    }

    escucharEventoEnviarMensaje() {
        return this.socket.fromEvent('escucharEventoEnviarMensaje')
    }

    // Envío de Ficha
    ejecutarEventoEnviarFicha(salaId: string, fila: number, columna: number, color: string) {
        this.socket.emit('enviarFicha', { salaId, fila, columna, color });
    }

    escucharEventoEnviarFicha() {
        return this.socket.fromEvent('escucharEventoEnviarFicha')
    }

    // Envío de Notificación
    ejecutarEventoEnviarNotificacion(salaId: string, nombrePlayer: string, notifiacion: string) {
        this.socket.emit('enviarNotificacion', { salaId, nombrePlayer, notifiacion });
    }

    escucharEventoEnviarNotificacion() {
        return this.socket.fromEvent('escucharEventoEnviarNotificacion')
    }
}


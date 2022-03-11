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
        this.socket.emit('enviarMensaje', {salaId, nombrePlayer, mensaje});
    }

    escucharEventoEnviarMensaje(){
        return this.socket.fromEvent('escucharEventoEnviarMensaje')
      }

    // ejecutarEventoEnviarMensaje(salaId: string, nombrePlayer: string, mensaje: string) {
    //     // Emitimos un evento
    //     this.socket.emit('enviarMensaje', { salaId, nombrePlayer, mensaje });
    // }

    // escucharEventoMensajeSala() {
    //     return this.socket.fromEvent('escucharEventoMensajeSala')
    // }

    // ejecutarEventoUnirseSala(salaId: string, nombrePlayer: string){
    //     console.log('2')
    //     const message = this.socket.emit('UnirseSala', {salaId: salaId, nombrePlayer: nombrePlayer})
    // }

    // escucharEventoUnirseSala(){
    //     console.log('3')
    //     return this.socket.fromEvent('ejecutarEventoUnirseSala')
    // }


    // ejecutarEventoConexion(nombrePlayer: string) {
    //     const message = this.socket.emit('Conexion', {
    //         nombre: nombrePlayer
    //     });
    //     console.log(message)
    // }

    // escucharEventoConexion() {
    //     return this.socket.fromEvent('escucharEventoConexion');
    // }

    // ejecutarEventoUnirseJuego(salaId: string, nombre: string) {
    //     const message = this.socket.emit('UnirseJuego', {
    //         salaId,
    //         nombre
    //     });
    // }

    // escucharEventoUnirseJuego() {
    //     return this.socket.fromEvent('escucharEventoUnirseJuego');
    // }

    // ejecutarEventoEnviarMensaje(juegoId: string, nombre: string, mensaje: string) {
    //     const resp = this.socket.emit('EmitirMensaje', {
    //         juegoId,
    //         nombre,
    //         mensaje
    //     });
    // }

    // escucharEventoEnviarMensaje() {
    //     return this.socket.fromEvent('escucharEventoEnviarMensaje');
    // }
}


import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';

@WebSocketGateway(
    8080,
    {
        cors: {
            origin: '*',
        }
    })

export class EventosGateway {

    // Unirse 
    @SubscribeMessage('unirseSala')
    unirseSala(
        //Parametros de la sala 
        @MessageBody()
        message: { salaId: string, nombrePlayer: string },
        //Socket de Conexión
        @ConnectedSocket()
        socket: Socket
    ) {
        // Nos unimos a la sala
        socket.join(message.salaId);
        const mensajeAEnviar: any = {
            mensaje: 'Bienvenido ' + message.nombrePlayer + ' a la sala ' + message.salaId,
        };
        // Transmite un mensaje a todos 
        socket.broadcast
            .to(message.salaId)
            .emit('escucharEventoUnirseSala', mensajeAEnviar);
        return 'ok';
    }

    @SubscribeMessage('enviarMensaje')
    enviarMensaje(
        //Parametros de la sala, mensaje y emisor 
        @MessageBody()
        message: { salaId: string, nombrePlayer: string, mensaje: string },
        //Socket de Conexión
        @ConnectedSocket()
        socket: Socket
    ) {
        // Cuando se envíe el mensaje se emitirá a todos los 
        // participantes de la sala el mensaje
        const nuevoMensaje = {
            nombre: message.nombrePlayer,
            //mensaje: 'El oponente ' + message.nombrePlayer + ' abandonó la sala ' + message.salaId,
            mensaje: message.mensaje,
            salaId: message.salaId
        } as any;
        socket.broadcast.to(message.salaId).emit('escucharEventoEnviarMensaje', nuevoMensaje);
        return 'ok';
    }

    // @SubscribeMessage('UnirseSala')
    // unirseSala(
    //     // Parámetros de Sala de Juego recibidos
    //     @MessageBody()
    //     message: { salaId: string, nombrePlayer: string },
    //     // Socket de Conexión
    //     @ConnectedSocket()
    //     socket: Socket
    // ){ 
    //     // Unirse a la Sala de Juego
    //     console.log('4')
    //     socket.join(message.salaId);

    //     const mensajeAEnviar: any = {
    //         mensaje: 'Bienvenido ' + message.nombrePlayer + ' a la sala ' + message.salaId,
    //     };
    //     // Transmisión del mensaje al otro jugador 
    //     console.log('5')
    //     socket.broadcast
    //         .to(message.salaId)
    //         .emit('escucharEventoUnirseSala', mensajeAEnviar);
    //         console.log('6')
    //     return;
    // }

    // @SubscribeMessage('Conexion')
    // mostrarConexion(
    //     @MessageBody()
    //     message: { nombre: string },
    //     //Socket de Conexión
    //     @ConnectedSocket()
    //     socket: Socket
    // ) {
    //     // Transmisión del mensaje a todos
    //     socket.broadcast
    //         .emit(
    //             'escucharEventoConexion',
    //             {
    //                 mensaje: "El jugador " + message.nombre + " se ha unido."
    //             }
    //         );
    //     return 'ok';
    // }

    // @SubscribeMessage('UnirseJuego')
    // unirseJuego(
    //     // Parametros del juego recibidos
    //     @MessageBody()
    //     message: { juegoId: string, nombre: string },
    //     // Socket de Conexión
    //     @ConnectedSocket()
    //     socket: Socket
    // ) {
    //     // Unirse al juego
    //     socket.join(message.juegoId);
    //     const mensajeAEnviar: any = {
    //         mensaje: 'Bienvenido ' + message.nombre,
    //     };
    //     // Transmisión del mensaje a todos
    //     socket.broadcast
    //         .to(message.juegoId)
    //         .emit(
    //             'escucharEventoUnirseJuego',
    //             mensajeAEnviar
    //         );
    //     return 'ok';
    // }

    // @SubscribeMessage('enviarMensaje')
    // enviarMensaje(
    //     // Parametros del juego recibidos
    //     @MessageBody()
    //     message: { juegoId: string, nombre: string, mensaje: string},
    //     // Socket de Conexión
    //     @ConnectedSocket()
    //     socket: Socket
    // ) {
    //     // Emitir el mensaje a todos
    //     const nuevoMensaje = {
    //         juegoId: message.juegoId,
    //         nombre: message.nombre,
    //         mensaje: message.mensaje
    //     } as any;
    //     // Transmisión
    //     socket.broadcast
    //     .to(message.juegoId)
    //     .emit('escucharEventoMensajeSala', nuevoMensaje);
    //     return 'ok';
    // }

}



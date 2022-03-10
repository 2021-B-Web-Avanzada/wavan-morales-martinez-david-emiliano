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

    @SubscribeMessage('Conexion')
    mostrarConexion(
        @MessageBody()
        message: { nombre: string },
        //Socket de Conexión
        @ConnectedSocket()
        socket: Socket
    ) {
        // Transmisión del mensaje a todos
        socket.broadcast
            .emit(
                'escucharEventoConexion',
                {
                    mensaje: "El jugador " + message.nombre + " se ha unido."
                }
            );
        return 'ok';
    }

    @SubscribeMessage('UnirseJuego')
    unirseJuego(
        // Parametros del juego recibidos
        @MessageBody()
        message: { juegoId: string, nombre: string },
        // Socket de Conexión
        @ConnectedSocket()
        socket: Socket
    ) {
        // Unirse al juego
        socket.join(message.juegoId);
        const mensajeAEnviar: any = {
            mensaje: 'Bienvenido ' + message.nombre,
        };
        // Transmisión del mensaje a todos
        socket.broadcast
            .to(message.juegoId)
            .emit(
                'escucharEventoUnirseJuego',
                mensajeAEnviar
            );
        return 'ok';
    }

    @SubscribeMessage('enviarMensaje')
    enviarMensaje(
        // Parametros del juego recibidos
        @MessageBody()
        message: { juegoId: string, nombre: string, mensaje: string},
        // Socket de Conexión
        @ConnectedSocket()
        socket: Socket
    ) {
        // Emitir el mensaje a todos
        const nuevoMensaje = {
            juegoId: message.juegoId,
            nombre: message.nombre,
            mensaje: message.mensaje
        } as any;
        // Transmisión
        socket.broadcast
        .to(message.juegoId)
        .emit('escucharEventoMensajeSala', nuevoMensaje);
        return 'ok';
    }

}



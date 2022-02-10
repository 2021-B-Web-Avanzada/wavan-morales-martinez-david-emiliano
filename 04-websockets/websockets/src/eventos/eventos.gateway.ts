import { SubscribeMessage, MessageBody, WebSocketGateway, ConnectedSocket } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';

@WebSocketGateway(
    8080,
    {
        cors: {
            origin: '*',
        }
    })


export class EventosGateway {
    @SubscribeMessage('hola')
    devolverHola(
        @MessageBody()
        message: { nombre: string },
        //Socket de Conexión
        @ConnectedSocket()
        socket: Socket
    ) {
        socket.broadcast
            .emit(
                'escucharEventoHola',
                {
                    mensaje: 'Bienvenido ' + message.nombre
                }
            );
        return 'ok';
    }

    @SubscribeMessage('unirseSala')
    unirseSala(
        //Parametros de la sala 
        @MessageBody()
        message: { salaId: string, nombre: string },
        //Socket de Conexión
        @ConnectedSocket()
        socket: Socket
    ) {
        // Nos unimos a la sala
        socket.join(message.salaId);
        const mensajeAEnviar: any = {
            mensaje: 'Bienvenido ' + message.nombre
        };
        // Transmite un mensaje a todos 
        socket.broadcast
            .to(message.salaId)
            .emit(
                'escucharEventoUnirseSala',
                mensajeAEnviar
            );
        return 'ok';
    }

    @SubscribeMessage('enviarMensaje')
    enviarMensaje(
        //Parametros de la sala, mensaje y emisor 
        @MessageBody()
        message: { salaId: string, nombre: string, mensaje: string },
        //Socket de Conexión
        @ConnectedSocket()
        socket: Socket
    ) {
        // Cuando se envíe el mensaje se emitirá a todos los 
        // participantes de la sala el mensaje
        const nuevoMensaje = {
            nombre: message.nombre,
            mensaje: message.mensaje,
            salaId: message.salaId
        } as any;
        socket.broadcast.to(message.salaId).emit('escucharEventoMensajeSala', nuevoMensaje);
        return 'ok';
    }
}


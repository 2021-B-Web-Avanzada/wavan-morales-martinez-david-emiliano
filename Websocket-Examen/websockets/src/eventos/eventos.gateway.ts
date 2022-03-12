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
        // Cuando se envíe el mensaje se emitirá al oponente
        const nuevoMensaje = {
            nombre: message.nombrePlayer,
            mensaje: message.mensaje,
            salaId: message.salaId
        } as any;
        socket.broadcast.to(message.salaId).emit('escucharEventoEnviarMensaje', nuevoMensaje);
        return 'ok';
    }

    @SubscribeMessage('enviarFicha')
    enviarFicha(
        //Parametros de la sala, mensaje y emisor 
        @MessageBody()
        message: {salaId: string, fila: number, columna: number, color: string},
        //Socket de Conexión
        @ConnectedSocket()
        socket: Socket
    ) {
        // Cuando se envíe la ficha se emitirá al oponente
        const nuevaFicha = {
            salaId: message.salaId,
            fila: message.fila,
            columna: message.columna,
            color: message.color
        } as any;
        socket.broadcast.to(message.salaId).emit('escucharEventoEnviarFicha', nuevaFicha);
        return 'ok';
    }

    // Enviar Notificacion
    @SubscribeMessage('enviarNotificacion')
    enviarNotificacion(
        //Parametros de la sala, mensaje y emisor 
        @MessageBody()
        message: { salaId: string, nombrePlayer: string, notifiacion: string },
        //Socket de Conexión
        @ConnectedSocket()
        socket: Socket
    ) {
        // Cuando se envíe el mensaje se emitirá al oponente
        const nuevoMensaje = {
            nombre: message.nombrePlayer,
            notifiacion: message.notifiacion,
            salaId: message.salaId
        } as any;
        socket.broadcast.to(message.salaId).emit('escucharEventoEnviarNotificacion', nuevoMensaje);
        return 'ok';
    }

}



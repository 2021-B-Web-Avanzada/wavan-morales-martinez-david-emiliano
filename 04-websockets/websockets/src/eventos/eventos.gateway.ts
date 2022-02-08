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
        message: {nombre: string},
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
}


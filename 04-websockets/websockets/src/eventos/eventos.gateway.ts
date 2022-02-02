import { SubscribeMessage, MessageBody, WebSocketGateway, ConnectedSocket } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';

@WebSocketGateway(
    8080,
    {
        cors: {
            origin: '*',
        },
        namespace: 'events'
    })

    export class EventosGateway {
        @SubscribeMessage('hola')
        devolverHola(
            @MessageBody()
                message,
            //Socket de Conexión
            @ConnectedSocket()
                socket:Socket
        ) {
            console.log(socket);
            console.log(socket.id);
            return {
                message,
                saludo: 'Hola'
            }
        }
    }


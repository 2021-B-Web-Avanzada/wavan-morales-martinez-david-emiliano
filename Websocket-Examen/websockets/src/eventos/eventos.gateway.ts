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
        socket.broadcast
            .emit(
                'escucharEventoConexion',
                {
                    mensaje: "El jugador " + message.nombre + " se ha unido."
                }
            );
        return 'ok';
    }
}



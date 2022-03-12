import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WebsocketsService } from 'src/app/servicios/websockets/websockets.service';

@Component({
  selector: 'app-ruta-game',
  templateUrl: './ruta-game.component.html',
  styleUrls: ['./ruta-game.component.scss']
})
export class RutaGameComponent implements OnInit {

  // Parametros de la URL
  nombrePlayer = '';
  salaId = '';
  estado = 'Juego Iniciado';
  mensaje = 'El oponente abandonó de sala';
  notificacion = "Perdiste";

  arregloSuscripciones: Subscription[] = [];
  arregloMensajes: {
    salaId: string;
    nombre: string;
    mensaje: string;
  }[] = [];

  arregloNotificaciones: {
    salaId: string;
    nombre: string;
    notificacion: string;
  }[] = [];


  fila!: number;
  columna!: number;
  color!: string;
  celda!: Element;
  filaEnviada!: number;
  columnaEnviada!: number;
  colorEnviada!: string;


  // Variables
  gameIsLive = true;   // Permite seguir jugando
  yellowIsNext = true; // Define el turno del juego

  // Abandonar Sala
  abandonarSala = false;

  constructor(
    public readonly activatedRoute: ActivatedRoute,
    private readonly websocketsService: WebsocketsService,
    private readonly router: Router,
  ) { }

  logicaJuego(): void {
    // Elementos del Tablero
    const allCells = document.querySelectorAll('.cell:not(.row-top)');
    const topCells = document.querySelectorAll('.cell.row-top');
    const resetButton = document.querySelector('.reset');
    const status = document.querySelector('.state');

    // Columnas
    const column0 = [allCells[35], allCells[28], allCells[21], allCells[14], allCells[7], allCells[0], topCells[0]];
    const column1 = [allCells[36], allCells[29], allCells[22], allCells[15], allCells[8], allCells[1], topCells[1]];
    const column2 = [allCells[37], allCells[30], allCells[23], allCells[16], allCells[9], allCells[2], topCells[2]];
    const column3 = [allCells[38], allCells[31], allCells[24], allCells[17], allCells[10], allCells[3], topCells[3]];
    const column4 = [allCells[39], allCells[32], allCells[25], allCells[18], allCells[11], allCells[4], topCells[4]];
    const column5 = [allCells[40], allCells[33], allCells[26], allCells[19], allCells[12], allCells[5], topCells[5]];
    const column6 = [allCells[41], allCells[34], allCells[27], allCells[20], allCells[13], allCells[6], topCells[6]];
    const columns = [column0, column1, column2, column3, column4, column5, column6];


    // Filas
    const topRow = [topCells[0], topCells[1], topCells[2], topCells[3], topCells[4], topCells[5], topCells[6]];
    const row0 = [allCells[0], allCells[1], allCells[2], allCells[3], allCells[4], allCells[5], allCells[6]];
    const row1 = [allCells[7], allCells[8], allCells[9], allCells[10], allCells[11], allCells[12], allCells[13]];
    const row2 = [allCells[14], allCells[15], allCells[16], allCells[17], allCells[18], allCells[19], allCells[20]];
    const row3 = [allCells[21], allCells[22], allCells[23], allCells[24], allCells[25], allCells[26], allCells[27]];
    const row4 = [allCells[28], allCells[29], allCells[30], allCells[31], allCells[32], allCells[33], allCells[34]];
    const row5 = [allCells[35], allCells[36], allCells[37], allCells[38], allCells[39], allCells[40], allCells[41]];
    const rows = [row0, row1, row2, row3, row4, row5, topRow];

    // Funciones

    // Arreglo de Celda 
    // Obtenemos la información de la celda y la ingresamos en un arreglo,
    // ...classList => Nos permite transformar un Objeto a Arreglo
    const getClassListArray = (cell: { classList: any; }) => {
      const classList = cell.classList;
      return [...classList];
    };

    // Localización de la celda
    // Obtenemos los valores de los índices definidos, primero búscamos dentro
    // del arreglo las filas y columnas, obtenemos el índice de la posición y
    // lo parseamos en un entero
    const getCellLocation = (cell: { classList: any; }) => {
      const classList = getClassListArray(cell);

      const rowClass = classList.find(className => className.includes('row'));
      const colClass = classList.find(className => className.includes('col'));
      const rowIndex = rowClass[4];
      const colIndex = colClass[4];
      const rowNumber = parseInt(rowIndex, 10);
      const colNumber = parseInt(colIndex, 10);

      return [rowNumber, colNumber];
    };

    // Obtener primera celda disponible por columna
    // En cada columna se busca por la celda que no este ocupada por una ficha
    // Itera en la columna (sin la fila superior) buscando la celda sin ficha
    // si se encuentra, nos retorna la celda, caso contrario retorna null
    const getFirstOpenCellForColumn = (colIndex: number) => {
      const column = columns[colIndex];
      const columnWithoutTop = column.slice(0, 6);

      for (const cell of columnWithoutTop) {
        const classList = getClassListArray(cell);
        if (!classList.includes('yellow') && !classList.includes('red')) {
          return cell;
        }
      }

      return null;
    };

    // Removiendo el color de la ficha en la fila superior
    const clearColorFromTop = (colIndex: number) => {
      const topCell = topCells[colIndex];
      topCell.classList.remove('yellow');
      topCell.classList.remove('red');
    };

    // Obteniendo el color de la celda
    // Revisamos la posición de la celda y verificamos el color
    const getColorOfCell = (cell: Element) => {
      const classList = getClassListArray(cell);
      if (classList.includes('yellow')) return 'yellow';
      if (classList.includes('red')) return 'red';
      return null;
    };

    // Revisamos las celdas ganadoras
    // Si el arreglo de celdas ganadoras es mayor o igual a 4,
    // desactivamos el juego, agregamos la propiedad ganadora
    // a las celdas para que se coloreen y modificamos el estado del juego
    const checkWinningCells = (cells: string | any[]) => {
      if (cells.length < 4) return false;

      this.gameIsLive = false;
      for (const cell of cells) {
        cell.classList.add('win');
      }
      status!.textContent = `${this.yellowIsNext ? '¡El Amarillo' : '¡El Rojo'} ha ganado!`
      this.enviarNotificacion()
      return true;
    };

    // Chequeamos el estado del juego
    // Obtendremos el color y posición de la celda que seleccionamos
    const checkStatusOfGame = (cell: Element) => {
      const color = getColorOfCell(cell);
      if (!color) return;
      const [rowIndex, colIndex] = getCellLocation(cell);

      // Verificación Horizontal
      // La última celda que seleccionemos será parte de la combinación ganadora
      // Tomamos la fila y columna de la celda seleccionada
      // Mientras el valor de la columna sea positivo, tomamos las celdas de la
      // fila en la que se encuentra la celda seleccionada para revisarlas
      // Si el color de la celda a revisar es igual al de la última celda seleccionada
      // agregamos esa celda a nuestro arreglo de celdas ganadoras
      // Revisamos primero hacia la izquierda y luego hacia la derecha
      // Si nos encontramos con una celda de otro color, salimos (break) de la función
      let winningCells = [cell];
      let rowToCheck = rowIndex;
      let colToCheck = colIndex - 1;
      while (colToCheck >= 0) {
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === color) {
          winningCells.push(cellToCheck);
          colToCheck--;
        } else {
          break;
        }
      }
      colToCheck = colIndex + 1;
      while (colToCheck <= 6) {
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === color) {
          winningCells.push(cellToCheck);
          colToCheck++;
        } else {
          break;
        }
      }
      let isWinningCombo = checkWinningCells(winningCells);
      if (isWinningCombo) return;


      // Verificación Vertical 
      // Similar a la verificación horizontal
      winningCells = [cell];
      rowToCheck = rowIndex - 1;
      colToCheck = colIndex;
      while (rowToCheck >= 0) {
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === color) {
          winningCells.push(cellToCheck);
          rowToCheck--;
        } else {
          break;
        }
      }
      rowToCheck = rowIndex + 1;
      while (rowToCheck <= 5) {
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === color) {
          winningCells.push(cellToCheck);
          rowToCheck++;
        } else {
          break;
        }
      }
      isWinningCombo = checkWinningCells(winningCells);
      if (isWinningCombo) return;


      // Verificación diagonal => //
      // Emplearemos las verificaciones creadas anteriormente, solo que esta vez
      // revisaremos las celdas que estan en la diagonal izquierda inferior de la
      // celda seleccionada y luego las que están en la diagonal superior derecha
      winningCells = [cell];
      rowToCheck = rowIndex + 1;
      colToCheck = colIndex - 1;
      while (colToCheck >= 0 && rowToCheck <= 5) {
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === color) {
          winningCells.push(cellToCheck);
          rowToCheck++;
          colToCheck--;
        } else {
          break;
        }
      }
      rowToCheck = rowIndex - 1;
      colToCheck = colIndex + 1;
      while (colToCheck <= 6 && rowToCheck >= 0) {
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === color) {
          winningCells.push(cellToCheck);
          rowToCheck--;
          colToCheck++;
        } else {
          break;
        }
      }
      isWinningCombo = checkWinningCells(winningCells);
      if (isWinningCombo) return;


      // Verificamos diagonal => \
      // Similar a la verificación diagonal anterior, revisamos las celdas
      // en la diagonal superior izquierda y luego las de la diagonal inferior
      // derecha
      winningCells = [cell];
      rowToCheck = rowIndex - 1;
      colToCheck = colIndex - 1;
      while (colToCheck >= 0 && rowToCheck >= 0) {
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === color) {
          winningCells.push(cellToCheck);
          rowToCheck--;
          colToCheck--;
        } else {
          break;
        }
      }
      rowToCheck = rowIndex + 1;
      colToCheck = colIndex + 1;
      while (colToCheck <= 6 && rowToCheck <= 5) {
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (getColorOfCell(cellToCheck) === color) {
          winningCells.push(cellToCheck);
          rowToCheck++;
          colToCheck++;
        } else {
          break;
        }
      }
      isWinningCombo = checkWinningCells(winningCells);
      if (isWinningCombo) return;

      // Verificación de Empate
      // Si cada una de las celdas esta ocupada por una ficha roja o amarilla
      // se declara un empate, para esto tomamos las filas sin la fila superior
      // Iteramos en entre todas las filas revisando que no existan celdas vacías
      const rowsWithoutTop = rows.slice(0, 6);
      for (const row of rowsWithoutTop) {
        for (const cell of row) {
          const classList = getClassListArray(cell);
          if (!classList.includes('yellow') && !classList.includes('red')) {
            return;
          }
        }
      }

      this.gameIsLive = false;
      status!.textContent = "¡Juego Empatado!";
    };

    // Obtener la posición de la celda sobre la que se situa el cursor
    // y situaremos la ficha en la fila superior dependiendo del 
    // turno del jugador (rojo o amarillo)
    const handleCellMouseOver = (e: { target: any; }) => {
      if (!this.gameIsLive) return;
      const cell = e.target;
      const [rowIndex, colIndex] = getCellLocation(cell);

      const topCell = topCells[colIndex];
      topCell.classList.add(this.yellowIsNext ? 'yellow' : 'red');
    };

    // Cuando el cursor se mueva, se eliminará la ficha posicionada en la
    // fila superior del tablero
    const handleCellMouseOut = (e: { target: any; }) => {
      const cell = e.target;
      const [rowIndex, colIndex] = getCellLocation(cell);
      clearColorFromTop(colIndex);
    };

    // Cuando se haga click sobre la columna/celda seleccionada, se buscará
    // la celda sin ficha, si toda la columna esta llena retorna null,
    // verificamos el estado del juego y finalmente se agregará en esta una 
    // ficha del color correspondiente y cambiará el color de la ficha al siguiente en turno
    const handleCellClick = (e: { target: any; }) => {
      if (!this.gameIsLive) return;
      const cell = e.target;
      const [rowIndex, colIndex] = getCellLocation(cell);

      const openCell = getFirstOpenCellForColumn(colIndex);

      if (!openCell) return;
      openCell.classList.add(this.yellowIsNext ? 'yellow' : 'red');

      this.websocketsService.ejecutarEventoEnviarFicha(this.salaId, rowIndex, colIndex, this.yellowIsNext ? 'yellow' : 'red');
      checkStatusOfGame(openCell);

      //this.yellowIsNext = !this.yellowIsNext;
      clearColorFromTop(colIndex);
      if (this.gameIsLive) {
        const topCell = topCells[colIndex];
        topCell.classList.add(this.yellowIsNext ? 'yellow' : 'red');
      }
    };


    // Event Listeners 

    // Evento para añadir la ficha
    // Posiciona la ficha en la fila superior de la celda sobre la que esta el mouse
    // Quita la ficha de la fila superior cuando el mouse se mueve a otra posición
    // Añade una ficha al tablero cuando se hace click en la celda 
    for (const row of rows) {
      for (const cell of row) {
        cell.addEventListener('mouseover', handleCellMouseOver);
        cell.addEventListener('mouseout', handleCellMouseOut);
        cell.addEventListener('click', handleCellClick);
      }
    }

    // Botón para resetear el juego
    // Cuando se haga click removeremos los colores y celdas ganadoras
    // de cada celda en el arreglo de filas, activamos el juego, definimos
    // el turno del primer jugador y cambiamos el estado del juego
    // resetButton!.addEventListener('click', () => {
    //   for (const row of rows) {
    //     for (const cell of row) {
    //       cell.classList.remove('red');
    //       cell.classList.remove('yellow');
    //       cell.classList.remove('win');
    //     }
    //   }
    //   this.gameIsLive = true;
    //   this.yellowIsNext = true;
    //   status!.textContent = 'Juego Iniciado';
    // });
  }

  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe({
        next: (parametrosRuta) => {
          const salaId = parametrosRuta['salaId'];
          const nombre = parametrosRuta['nombre'];
          this.salaId = salaId;
          this.nombrePlayer = nombre;
          this.logicaSalas(this.salaId, this.nombrePlayer);
        }
      })
    this.logicaJuego()
  }

  logicaSalas(salaId: string, nombrePlayer: string) {
    this.desSuscribirse();
    // Movimiento de Fichas
    const respEscucharEventoFicha = this.websocketsService
      .escucharEventoEnviarFicha()
      .subscribe({
        next: (data: any) => {
          console.log("Enviaron Ficha", data);
          this.filaEnviada = data.fila;
          this.columnaEnviada = data.columna;
          this.colorEnviada = data.color;
          console.log('FICHA LLEGO ' + this.filaEnviada + ' - ' + this.columnaEnviada + ' - ' + this.colorEnviada)
          const celda = document.querySelectorAll('.cell.row-' + this.filaEnviada + '.col-' + this.columnaEnviada);
          console.log(celda[0])
          if (this.columnaEnviada < 6 && this.columnaEnviada > 0 && this.filaEnviada > 0 && this.filaEnviada < 5) {
            celda[0].setAttribute('class', 'cell row-' + this.filaEnviada + ' col-' + this.filaEnviada + ' ' + this.colorEnviada)
          } else {
            if (this.filaEnviada == 0 && this.columnaEnviada == 6) {
              celda[0].setAttribute('class', 'cell row-' + this.filaEnviada + ' col-' + this.filaEnviada + ' ' + this.colorEnviada + ' top-border' + ' right-border')
            } else {
              if (this.filaEnviada == 0 && this.columnaEnviada == 0) {
                celda[0].setAttribute('class', 'cell row-' + this.filaEnviada + ' col-' + this.filaEnviada + ' ' + this.colorEnviada + ' top-border' + ' left-border')
              } else {
                if (this.columnaEnviada == 0 && this.filaEnviada == 5) {
                  celda[0].setAttribute('class', 'cell row-' + this.filaEnviada + ' col-' + this.filaEnviada + ' ' + this.colorEnviada + ' left-border' + ' bottom-border')
                } else {
                  if (this.columnaEnviada == 6 && this.filaEnviada == 5) {
                    celda[0].setAttribute('class', 'cell row-' + this.filaEnviada + ' col-' + this.filaEnviada + ' ' + this.colorEnviada + ' right-border' + ' bottom-border')
                  } else {
                    if (this.filaEnviada == 5) {
                      celda[0].setAttribute('class', 'cell row-' + this.filaEnviada + ' col-' + this.filaEnviada + ' ' + this.colorEnviada + ' bottom-border')
                    } else {
                      if (this.filaEnviada == 0) {
                        celda[0].setAttribute('class', 'cell row-' + this.filaEnviada + ' col-' + this.filaEnviada + ' ' + this.colorEnviada + ' top-border')
                      } else {
                        if (this.columnaEnviada == 0) {
                          celda[0].setAttribute('class', 'cell row-' + this.filaEnviada + ' col-' + this.filaEnviada + ' ' + this.colorEnviada + ' left-border')
                        } else {
                          if (this.columnaEnviada == 6) {
                            celda[0].setAttribute('class', 'cell row-' + this.filaEnviada + ' col-' + this.filaEnviada + ' ' + this.colorEnviada + ' right-border')
                          }
                          // } else {
                          // if (this.columnaEnviada < 6 && this.columnaEnviada > 0 && this.filaEnviada > 0 && this.filaEnviada < 5) {
                          //   celda[0].setAttribute('class', 'cell row-' + this.filaEnviada + ' col-' + this.filaEnviada + ' ' + this.colorEnviada)
                          // }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        error: (error) => {
          console.error({ error });
        }
      });
    // Abandono de Oponente
    const respEscucharEventoMensajeSala = this.websocketsService
      .escucharEventoEnviarMensaje()
      .subscribe({
        next: (data: any) => {
          console.log("Oponente Abandonó", data);
          this.arregloMensajes.push({
            mensaje: data.mensaje,
            salaId: data.salaId,
            nombre: data.nombre,
          })
          if (this.mensaje == 'El oponente abandonó de sala') {
            this.abandonarSala = true;
            this.estado = 'Esperando Oponente'
          }
        },
        error: (error) => {
          console.error({ error });
        }
      }
      );
    // Escucha de Notificacion
    const respEscucharEventoNotificacion = this.websocketsService
      .escucharEventoEnviarNotificacion()
      .subscribe({
        next: (data: any) => {
          this.arregloNotificaciones.push({
            notificacion: data.notificacion,
            salaId: data.salaId,
            nombre: data.nombre,
          })
          this.estado = 'Perdiste'
          this.gameIsLive= false;
        },
        error: (error) => {
          console.error({ error });
        }
      }
      );
    // Ingreso de un usuario
    const respEscucharEventoUnirseSala = this.websocketsService
      .escucharEventoUnirseSala()
      .subscribe({
        next: (data) => {
          console.log("Oponente Ingreso", data);
          this.abandonarSala = false;
          this.estado = 'Juego Iniciado'
          this.yellowIsNext = !this.yellowIsNext;
        },
        error: (error) => {
          console.error({ error });
        }
      })
    this.arregloSuscripciones.push(respEscucharEventoNotificacion);
    this.arregloSuscripciones.push(respEscucharEventoUnirseSala);
    this.arregloSuscripciones.push(respEscucharEventoMensajeSala);
    this.arregloSuscripciones.push(respEscucharEventoFicha);
    this.websocketsService.ejecutarEventoUnirseSala(this.salaId, this.nombrePlayer)
  }

  enviarMensaje() {
    this.desSuscribirse();
    this.arregloMensajes.push({
      salaId: this.salaId,
      nombre: this.nombrePlayer,
      mensaje: this.mensaje,
    })
    this.websocketsService.ejecutarEventoEnviarMensaje(this.salaId, this.nombrePlayer, this.mensaje);
    this.abandonarSala = true;
    const ruta = ['start'];
    this.router.navigate(ruta);
  }

  enviarNotificacion() {
    this.desSuscribirse();
    this.arregloNotificaciones.push({
      salaId: this.salaId,
      nombre: this.nombrePlayer,
      notificacion: this.notificacion,
    })
    this.websocketsService.ejecutarEventoEnviarNotificacion(this.salaId, this.nombrePlayer, this.notificacion);
  }

  desSuscribirse() {
    this.arregloSuscripciones.forEach(
      (suscription) => {
        suscription.unsubscribe();
      }
    );
    this.arregloSuscripciones = [];
  }

}




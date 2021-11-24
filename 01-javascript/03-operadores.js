//03-operadores.js

const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

// Funciones como parámetros
// Find
// Enviamos una expresión -> TRUTY/FALSY
// Nos devuelve el primero que cumple esta condición
const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === "Cristian";       //Expresion
        }
    );
console.log('respuestaFind', respuestaFind);

// FindIndex
const respuestaIndex = arreglo
    .findIndex(
        function (valorActual, indiceActual, arregloCompleto) {
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuestaIndex', respuestaIndex);  //Indice -> 6
                                                //No encuentra -> -1

// Foreach
// Itera el arreglo
const respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
        }
    );
console.log('respuestaForEach', respuestaForEach);

// Map
// Enviamos los datos del nuevo arreglo
// Devuelve el nuevo arreglo
const respuestaMap = arreglo
    .map(
        (valorActual, indiceActual, arregloCompleto) => {
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + 1,
            };
            return nuevoElemento;
        }
    );
console.log('RespuestaMap', respuestaMap);
console.log('arreglo', arreglo);

// Filter
// Enviamos expresión Truty/Falsy
// Devuelve los elementos que cumplen esa condición
const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota >= 14;
        }
    );
console.log('respuestaFilter', respuestaFilter);
console.log('arreglo', arreglo);

// Some
// Devuelve un bolleano
// Hay alguna nota menor a nueve? Si o no
// OR
const respuestaSome = arreglo
    .some(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota < 9;
        }
    );
console.log('respuestaSome', respuestaSome);

// Every
// Devuelve un booleano
// Todas las notas son mayores a 14? Si o no
// AND
const respuestaEvery = arreglo
    .every(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota > 14;
        }
    );
console.log('respuestaEvery', respuestaEvery);

// Reduce            Izquierda->Derecha
// Reduce Right      Derecha->Izquierda
const respuestaReduce = arreglo
    .reduce(
        function (valorAcumulado, valorActual, indice, arreglo) {
            return (valorAcumulado - valorActual.nota);  //Calculo
        },
        100 // Acumulador (Otro parámetro de la función reduce)
    );
console.log('respuestaReduce', respuestaReduce); //100 - x = -46


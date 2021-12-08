//03-funciones
function sumarNumeros(numeroInicial) {
    var numerosInfinitos = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numerosInfinitos[_i - 1] = arguments[_i];
    }
    return numeroInicial;
}
sumarNumeros(1, 1, 2, 3, 4, 5, 6);
// Funciones Void
function imprimir(mensaje) {
    console.log('Hola' + mensaje);
}
// Arreglos
var arregloNumeros = [1, 2]; //Arreglo de números
var arrgeloNumerosDos = [1, 2]; //Arreglo de Números
var arregloNumerosTres = [1, 'dos', true]; //Arreglo de Números, Strings, Booleanos
var arregloNumerosCuatro = [1, 'dos', true]; // Arreglo de Números, Strings, Booleanos
var arregloNumerosCinco = [1, 2];
arregloNumerosCinco = ['uno', 'dos'];

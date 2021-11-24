// 04-funciones.js

function soloNumeros(a, b, c) {
    return a - b + c;    // Valor a devolver
}

function soloLetras(a, b, c) {
    console.log(a, b, c);  // Undefined
}

// JS permite el uso de funciones sin validaciones
//soloNumeros('v', true, [1, 2, 3]);
//soloNumeros((a)=>a, (a)=>a, (a)=>a);
//soloNumeros(1, 2, 3, 4, 5, 6);
//soloNumeros();

function soloLetras(a, b, c) {
    console.log(a, b, c);
}

// Tipos de Funciones
// Funciones Nombradas
function funcionNombrada() {
}

// Funciones Sin Nombre o Anónimas
const funcionSinNombre1 = function () {
};
var funcionSinNombre2 = function () {
};
let funcionSinNombre3 = function () {
};
[].forEach(function () {
});
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();

// Funciones Anónimas - Fat Arrow Fuctions
const funcionFatArrow1 = () => {
};
var funcionFatArrow2 = () => {
};
let funcionFatArrow3 = () => {
};
[].forEach(() => {
});
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();

const funcionFatArrow4 = () => {
};
const funcionFatArrow5 = (x) => {
    return x + 1;
};
const funcionFatArrow6 = (x) => x + 1;  // En una sola línea
                                        // Omito Return
                                        // Omito Llaves
const funcionFatArrow7 = x => x + 1;     // Si solo tenemos un parámetro, omito los paréntesis
const funcionFatArrow8 = (x, y, z) => x + y + z;

// ... = Parámetros infinitos que llegan en un arrelo
//       Solo se puede tener una de estas por función
function sumarNumero(...otrosNumeros) {
    let total = 0;
    otrosNumeros.forEach(
        (valorActual) => {
            total = total + valorActual;
        }
    );
    return total;
    // return otrosNumeros.reduce((a,v) => a + v, 0);
}
console.log(sumarNumero(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13));
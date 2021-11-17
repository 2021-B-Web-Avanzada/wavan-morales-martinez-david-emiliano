// Mutables e Inmutables
// Mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = false;
numeroDos = true;

// Inmutables
const configuracionArchivos = "PDF";

// Tipos de Variables
const numero = 1;           //Number
const sueldo = 1.2;         //Number
const texto = "David";      //String
const apellido = "Morales"; //String
const booleano = false;     //Booleano
const hijos = null;         //Objeto
const zapatos = undefined;  //Indefinido

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof Number("asd"));//Number
console.log(Number("asd"));       //NaN - Not a Number

//Truty y Falsy
if(""){
    console.log("String vacío es un Truty");
} else {
    console.log("String vacío es un Falsy")
}

if("David"){
    console.log("String lleno es un Truty");
} else {
    console.log("String lleno es un Falsy")
}

// Truty y Falsy en Números
if(-1){
    console.log("Negativo es un Truty");
} else {
    console.log("Negativo es un Falsy")
}

if(0){
    console.log("Cero es un Truty");
} else {
    console.log("Cero es un Falsy")
}

if(1){
    console.log("Positivo es un Truty");
} else {
    console.log("Positivo es un Falsy")
}

//Undefined y Null
if(null){
    console.log("Null es un Truty");
} else {
    console.log("Null es un Falsy")
}

if(undefined){
    console.log("Undefined es un Truty");
} else {
    console.log("Undefined es un Falsy")
}

//Objetos JS (JSON) - Arreglos
const david = {
    nombre: "David",
    false: "Morales",
    edad: 21,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: "gris",
        talla: "40",
    },
    mascotas: ["Luna", "Luna", "Teo", "Romina", "Bebelin", "Bebecita", "Tommy"]
}


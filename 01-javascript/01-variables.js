/*
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
    apellido: "Morales",
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

////Acceder a las propiedades del objeto
david.nombre;   //"David"
david.apellido; //"Morales"
david["nombre"];
console.log(david);
david.nombre = "Emiliano";
console.log(david);
david["nombre"] = "David";
david.sueldo;
console.log(david.sueldo);

david.sueldo = 3.8;
console.log(david.sueldo);
david["gastos"] = 0.8;
console.log(david.gastos);
david.nombre = undefined;
console.log(david);
console.log(Object.keys(david));
console.log(Object.values(david));

delete david.nombre; //Eliminar la llave nombre
console.log(david);

//Variables por valor o referencia
//Variables por valor en JS son las primitivas, estas son: number, string, boolean
let edadDavid = 21;
let edadEmiliano = edadDavid; //Guardamos una primitiva  en otra variable
                              //Variables por valor
console.log(edadDavid);    //21
console.log(edadEmiliano); //21
edadDavid = edadEmiliano + 1;
console.log(edadDavid);    //22
console.log(edadEmiliano); //21

//Variables por referencia: Objects ([], {}) - (Arreglos o JSON)
let bruno = {
    nombre : "Bruno"
};

let miguel = bruno;
console.log(bruno);
console.log(miguel);
miguel.nombre = "Miguel";
console.log(bruno);
console.log(miguel);
delete bruno.nombre;
console.log(bruno);
console.log(miguel);
*/

// Para clonar un objeto
let bruno = {
    nombre : "Bruno"
};
let miguel = Object.assign({}, bruno);
console.log(bruno);
console.log(miguel);
miguel.nombre = "Miguel";
delete bruno.nombre;
console.log(bruno);
console.log(miguel);

//Para los arreglos
let arregloNumeros = [1,2,3,4,5];
let arregloClonado = Object.assign([],arregloNumeros);
console.log(arregloNumeros);
console.log(arregloClonado);
arregloNumeros[0] = 200;
arregloClonado[0] = 100;
console.log(arregloNumeros);
console.log(arregloClonado);


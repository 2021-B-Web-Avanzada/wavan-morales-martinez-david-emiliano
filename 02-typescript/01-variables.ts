// 01-variables.ts
let nombre: string = 'David'; //Primitivo
let nombre2: String = 'David E' // Clase String

nombre = 'Emiliano';
let edad: number = 32;
let casado:boolean = false;
let fecha:Date = new Date();
let sueldo: number;
sueldo = 15.6;

//Duck Typing
let apellido = 'Morales'; //String ->
apellido = 'Martinez';    // Igual a otros string
apellido.toUpperCase();   // Métodos String

let weed: any = 2;
weed = '2';
weed = true;
weed = () => '2';

let edadMultiple: number | string | Date = 2;
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos';
edadMultiple = new Date();


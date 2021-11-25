// 05-destruccion.js

const david = {
    nombre: "David",
};

const bruno = {
    nombre: "Bruno",
    apellido: "Aguirre",
};

const davidBruno = {   // Creando una nueva referencia
    ...bruno,   // 1   El orden es importante para propiedades que se repiten
    ...david,   // 2   El último reemplaza a los anteriores
};
console.log('davidBruno', davidBruno);

// Destructuración de arreglos
const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];
const superArreglo = [
    ...arregloDos,
    ...arregloUno,
];
console.log('superArreglo', superArreglo);


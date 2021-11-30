// 06-callbacks.js


const fs = require('fs');  // Importando File System

console.log("PRIMERO");
fs.readFile(
    './01-variables.js',
    'utf-8',
    (error, contenido) => {
        if (error) {
            console.error({mensaje: "Error Leyendo Contenido", error: error});
        }
        fs.readFile(
            './06-ejemplo.txt',
            'utf-8',
            (error_6, contenido_6) => {
                if (error_6) {
                    console.error({mensaje: "Error Leyendo Contenido de 06-ejemplo.txt", error: error_6});
                } else {
                    console.log(contenido + contenido_6);
                }
            }
        )
    }
);
console.log('TERCERO');



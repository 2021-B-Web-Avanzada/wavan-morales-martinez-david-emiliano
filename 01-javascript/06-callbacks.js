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
            (error, contenido_6) => {
                if (error) {
                    console.error({mensaje: "Error Leyendo Contenido", error: error});
                } else {
                    console.log(contenido + contenido_6);
                }
            }
        )
    }
);
console.log('TERCERO');


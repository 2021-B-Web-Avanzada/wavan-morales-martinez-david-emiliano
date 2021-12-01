//09-ejercicio-lec-esc-promesas-js
const fs = require('fs');

/*
Hacer una función que me acepte como parámetro una varible
con el path del archivo y el contenido a agregar al contenido del archivo.
La función debe tomar estos dos parámetros y leer el archivo y añadir
el texto al fnal del archivo. Al final vamos a leer el archivo nuevamente e imprimirlo
en consola.
TODO DEBE SER REALIZADO CON PROMESAS
- Promesa de lectura
- Promesa de Escritura
 */

function promesaLeerArchivo(path) {
    const leerArchivo = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(contenido);
                    }
                }
            )
        }
    )
    return leerArchivo
}

function promesaEscribirArchivo(path, contenidoActual, nuevoContenido) {
    const escribirArchivo = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoActual + '\n' + nuevoContenido,
                'utf-8',
                (error_escritura) => {
                    if (error_escritura) {
                        reject(error_escritura);
                    } else {
                        resolve(console.log('Archivo escrito'));
                    }
                })
        }
    )
    return escribirArchivo
}

function ejercicio(path, nuevoContenido) {
    promesaLeerArchivo(path)
        .then(
            (datosPromesa) => promesaEscribirArchivo(path, datosPromesa, nuevoContenido)
        )
        .then(
            () => promesaLeerArchivo(path)
        )
        .then(
            datosPromesa => console.log(datosPromesa)
        )
        .catch(
            (error) => console.log(error)
        )
        .finally()
}

ejercicio('./06-ejemplo.txt', 'Buenos Días');
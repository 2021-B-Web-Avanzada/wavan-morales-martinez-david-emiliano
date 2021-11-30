/*
Función que acepte como parámetros una variable, con el path del archivo
y el contenido a agregar al contenido del archivo. La función debe tomar
estos dos parámetros y leer el archivo y añadir el texto al final del
archivo
 */

function escribirArchivo(path, contenidoNuevo) {
    fs.readFile(
        path,
        'utf-8',
        (error, contenido) => {
            if (error) {
                console.error({mensaje: "Error Leyendo Contenido de 06-ejemplo.txt", error: error});
            } else {
                fs.writeFile(
                    path,
                    contenido + '\n' + contenidoNuevo,
                    'utf-8',
                    (error_escritura) => {
                        if (error_escritura) {
                            console.error({mensaje: "Error Agregando Contenido de 06-ejemplo.txt", error: error});
                        } else {
                            console.log('Archivo escrito');
                        }
                    })
            }
        }
    )
};

escribirArchivo('./06-ejemplo.txt', 'Buenas Tardes2');

//10-async-await.js

const promesaLeerArchivo = () => {
    return new Promise(
        (res, rej) => {
            res('Contenido Leer Archivo');
        }
    );
}

const promesaEscribirArchivo = () => {
    return new Promise(
        (res, rej) => {
            res('Contenido Escribir Archivo');
        }
    );
}

//ASYNC AWAIT
//const ejemplo1 = async function () {}
//const ejemplo1 = async () => {}

async function ejercicio() {
    console.log('1')
    let nuevoContenido = '';
    try {
        const contenidoArchivoActual = await promesaLeerArchivo();
        console.log(contenidoArchivoActual);
        console.log('3');
        await promesaEscribirArchivo();
        console.log('4');
        const nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');
    } catch (error) {
        console.error(error);
    }
    console.log('6');
    console.log('7');
    return nuevoContenido;
}

ejercicio().then(
    (data) => {console.log('Esta es la respuesta del Async Await', data);}).catch().finally()
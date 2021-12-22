// Importaciones 
const inquirer = require('inquirer'); // Importando el Inquirer
const fs = require('fs');  // Importando File System
const { addAbortSignal } = require('stream');
var path  = './concesionarios.json';

// Exportamos las funciones 
module.exports = {
    buscarConcesionario,
    obtenerConcesionarios,
    obtenerAutos,
    guardarConcesionario,
    guardarAuto,
    borrarConcesionario,
    borrarAuto,
    updateAuto,
    updateConcesionario
}


// Menu de Inicio
async function inquirerMenu() {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'menu',
                    message: 'Elija una Opción: ',
                    choices: ['Crear Concesionario', 'Crear Auto', 'Mostrar Concesionarios', 'Mostrar Autos', 'Actualizar Concesionario', 'Actualizar Auto', 'Borrar Concesionario', 'Borrar Auto']
                },
            ]);
        return JSON.stringify(respuesta)
    } catch (e) {
        console.error(e);
    }
}

// Selección de opciones
async function seleccionarOpcion(seleccion) {
    try {
        if (seleccion === 'Crear Concesionario') {
            crearConcesionario(path)
        }
        if (seleccion === 'Crear Auto') {
            crearAuto(path)
        }
        if (seleccion === 'Mostrar Concesionarios') {
            mostrarConcesionario(path)
        }
        if (seleccion === 'Mostrar Autos') {
            mostrarAuto(path)
        }
        if (seleccion === 'Actualizar Concesionario') {
            actualizarConcesionario(path)
        }
        if (seleccion === 'Actualizar Auto') {
            actualizarAuto(path)
        }
        if (seleccion === 'Borrar Concesionario') {
            borrarConcesionario(path)
        }
        if (seleccion === 'Borrar Auto') {
            borrarAuto(path)
        }
    } catch (e) {
        console.error(e);
    }
}

// Inquirer del Concesionario
async function inquirerConcesionario() {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombreConcesionario',
                    message: 'Ingresa el Nombre del Concesionario: '
                },
                {
                    type: 'input',
                    name: 'direccion',
                    message: 'Ingresa la Dirección del Concesionario: '
                },
                {
                    type: 'input',
                    name: 'telefono',
                    message: 'Ingresa el Número de Teléfono: '
                },
                {
                    type: 'confirm',
                    name: 'abierto',
                    message: '¿El concesionario esta Abierto? ',
                },
                {
                    type: 'input',
                    name: 'web',
                    message: 'Ingrese su Página Web: '
                },
            ]);
        return respuesta
    } catch (e) {
        console.error(e);
    }
}

// Inquirer del Auto
async function inquirerAuto(concesionario) {
    try {
        const auto = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'modelo',
                    message: 'Ingresa el Modelo del Auto: '
                },
                {
                    type: 'number',
                    name: 'año',
                    message: 'Ingresa el Año del Auto: '
                },
                {
                    type: 'confirm',
                    name: 'nuevo',
                    message: '¿El auto es nuevo?'
                },
                {
                    type: 'input',
                    name: 'color',
                    message: 'Ingrese el Color del Auto: '
                },
                {
                    type: 'number',
                    name: 'precio',
                    message: 'Ingresa el Precio del Auto: '
                }
            ]);
        return auto
    } catch (e) {
        console.error(e);
    }
}

// Inquirer Actualizar Concesionario
async function inquirerActualizarConcesionario(concesionario){
    try {
        const nuevoConcesionario = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'direccion',
                    message: 'Ingresa la Dirección del Concesionario: '
                },
                {
                    type: 'input',
                    name: 'telefono',
                    message: 'Ingresa el Número de Teléfono: '
                },
                {
                    type: 'confirm',
                    name: 'abierto',
                    message: '¿El concesionario esta Abierto? ',
                },
                {
                    type: 'input',
                    name: 'web',
                    message: 'Ingrese su Página Web: '
                },
            ]);

            const concesionarioCompleto = {
                ...concesionario,
                ...nuevoConcesionario
            }
            
            let concesionarios = obtenerConcesionarios();
            const indice = concesionarios.findIndex(patio => patio['nombreConcesionario'] === concesionarioCompleto.nombreConcesionario);
            concesionarios[indice] = concesionarioCompleto;
            escribirArchivo(concesionarios);
            console.log('Concesionario Actualizado')
    } catch (e) {
        console.error(e);
    }
}

// Inquirer Actualizar Auto
async function inquirerActualizarAuto(concesionario, auto) {
    try {
        const nuevoAuto = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'año',
                    message: 'Ingresa el Año del Auto: '
                },
                {
                    type: 'confirm',
                    name: 'nuevo',
                    message: '¿El auto es nuevo?'
                },
                {
                    type: 'input',
                    name: 'color',
                    message: 'Ingrese el Color del Auto: '
                },
                {
                    type: 'number',
                    name: 'precio',
                    message: 'Ingresa el Precio del Auto: '
                }
            ]);
            const autoActualizado = {
                ...auto,
                ...nuevoAuto
            }
            let concesionarios = obtenerConcesionarios();
            for (let element of concesionarios){
                if(element['nombreConcesionario'].toLowerCase().includes(concesionario.toLowerCase())){
                    let cars = element.autos;
                    const indice = cars.findIndex(book => book.modelo === autoActualizado.modelo);
                    element.autos[indice] = autoActualizado;
                    break;
                }
            }
            escribirArchivo(concesionarios);
            console.log("Auto Actualizado")
    } catch (e) {
        console.error(e);
    }
}

// SELECT

// Seleccionar Concesionario
async function seleccionarConcesionario() {
    let co = [];
    obtenerConcesionarios().forEach(element => {
        co.push(element.nombreConcesionario);
    })
    const concesionario = await inquirer.prompt([
        {
            type: 'list',
            name: 'nombreConcesionario',
            message: 'Escoja un Concesionario: ',
            choices: co,
        },
    ]);
    return concesionario.nombreConcesionario;
}


// Seleccionar Auto
async function seleccionarAuto(concesionario) {
    let autos = [];
    buscarConcesionario(concesionario).autos.forEach(element =>{
        autos.push(element.modelo);
    })
    const auto = await inquirer.prompt([
        {
            type: 'list',
            name: 'modelo',
            message: 'Escoja un Auto: ',
            choices: autos,
        },
    ]);
    return auto;
}


// CREATE

// Crear Concesionario
function guardarConcesionario(concesionario) {
    concesionario.autos = [];
    let concesionarios = obtenerConcesionarios();
    concesionarios.push(concesionario);
    escribirArchivo(concesionarios);
}

// Crear Auto
async function guardarAuto() {
    let concesionario = await seleccionarConcesionario
();
    let auto = await inquirerAuto();
    let concesionarios = obtenerConcesionarios();
    for (element of concesionarios){
        if(element['nombreConcesionario'].toLowerCase().includes(concesionario.toLowerCase())){
            element.autos.push(auto);
            break;
        }
    }
    escribirArchivo(concesionarios);
}

// READ

// Obtener Concesionarios
function obtenerConcesionarios(){
    const data = fs.readFileSync(path);
    const names = JSON.parse(data);
    return names;
}

// Obtener Autos
async function obtenerAutos(concesionario){
    let concesionarios = obtenerConcesionarios();
    for (element of concesionarios){
        if(element['nombreConcesionario'].toLowerCase().includes(concesionario.toLowerCase())){
            return element.autos;
        }
    }
}

// UPDATE

// Actualizar Auto
async function updateAuto(nombreconcesionario){
    const concesionario = buscarConcesionario(nombreconcesionario);
    const autos = concesionario.autos;
    const auto = await seleccionarAuto(nombreconcesionario);
    for(element of autos){
        if(element['modelo'].toLowerCase().includes(auto.modelo.toLowerCase())){
            await inquirerActualizarAuto(nombreconcesionario, auto);
            break;
        }
    }
}

// Actualizar Concesionario
async function updateConcesionario(concesionario) {
    const concesionarios = obtenerConcesionarios();
    for(element of concesionarios){
        if(element['nombreConcesionario'].toLowerCase().includes(concesionario.toLowerCase())){
            await inquirerActualizarConcesionario(element);
            break;
        }
    }
}

// DELETE

// Borrar Concesionario
function borrarConcesionarios(concesionario) {
    try{
        let concesionarios = obtenerConcesionarios();
        for (element of concesionarios){
            if (element['nombreConcesionario'].toLowerCase().includes(concesionario.toLowerCase())){
                concesionarios.splice(concesionarios.indexOf(concesionario),1);
                break;
            }
        }
        escribirArchivo(concesionarios);
    } catch (error){
        console.error(error);
    }
}

// Borrar Auto
async function borrarAutos(nombreConcesionario) {
    try{
        let auto = await seleccionarAuto(nombreConcesionario);
        let concesionarios = obtenerConcesionarios();
        for (element of concesionarios){
            if(element['nombreConcesionario'].toLowerCase().includes(nombreConcesionario.toLowerCase())){
                for (item of element.autos){
                    if(item.modelo.toLowerCase().includes(auto.modelo.toLowerCase())){
                        element.autos.splice(element.autos.indexOf(item), 1);
                        break;
                    }
                }
            }
        }
        escribirArchivo(concesionarios);
    } catch (error){
        console.error(error);
    }
    console.log('Auto Borrado');
}

// Escritura en el archivo
function escribirArchivo(data){
    fs.writeFileSync(path, JSON.stringify(data));
}

// Concesionario por el Nombre
function buscarConcesionario(concesionario) {
    for (const iterator of obtenerConcesionarios()) {
        if (iterator['nombreConcesionario'].toLowerCase().includes(concesionario.toLowerCase())) {
            return iterator;
        }
    }
    return null;
}


//FUNCIONES

async function crearConcesionario(path) {
    inquirerConcesionario()
    .then(concesionario => guardarConcesionario(concesionario));
}

function crearAuto(path) {
    guardarAuto();
}

function mostrarConcesionario(path) {
    console.log(obtenerConcesionarios())
}

function mostrarAuto(path) {
    seleccionarConcesionario()
    .then(concesionario => console.log(obtenerAutos(concesionario)));
}

function actualizarConcesionario(path) {
    seleccionarConcesionario()
    .then(concesionario => updateConcesionario(concesionario));
}

function actualizarAuto(path) {
    seleccionarConcesionario()
    .then(respuesta => updateAuto(respuesta))
}

function borrarConcesionario(path) {
    seleccionarConcesionario()
    .then(respuesta => borrarConcesionarios(respuesta))
}

function borrarAuto(path) {
    seleccionarConcesionario()
    .then(respuesta => borrarAutos(respuesta))
}

//MAIN

async function main() {
    inquirerMenu()
        .then(respuesta => {
            var obj = JSON.parse(respuesta);
            var opcion = obj['menu'];
            seleccionarOpcion(opcion);
        })
}

main();
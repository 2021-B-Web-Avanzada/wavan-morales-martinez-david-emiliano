// Importaciones 
const inquirer = require('inquirer'); // Importando el Inquirer
const fs = require('fs');  // Importando File System
var path  = './concesionarios.json';


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
async function inquirerAuto() {
    try {
        const respuesta = await inquirer
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
        return respuesta
    } catch (e) {
        console.error(e);
    }
}

// Inquirer del Concesionario
async function inquirerActualizarConcesionario() {
    try {
        const respuesta = await inquirer
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
        return respuesta
    } catch (e) {
        console.error(e);
    }
}

// Inquirer Actualizar Auto
async function inquirerActualizarAuto() {
    try {
        const respuesta = await inquirer
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
        return respuesta
    } catch (e) {
        console.error(e);
    }
}

// Seleccionar Concesionario
async function inquirerSeleccionarConcesionario() {
    let co = [];
    obtenerConcesionarios().forEach(element => {
        co.push(element.nombreConcesionario);
    })
    const concesionario = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Escoja un Concesionario: ',
            choices: co,
        },
    ]);
    return concesionario;
}

//// Seleccionar Auto
async function inquirerSeleccionarAuto() {
    console.log('Auto Seleccionado');
}

// Obtener Concesionarios
function obtenerConcesionarios(){
    const data = fs.readFileSync(path);
    const names = JSON.parse(data);
    return names;
}

//// Obtener Autos
function obtenerAutos(concesionario){
    console.log('Auto Obtenidos');
}

//// Guardar Concesionarios
function guardarConcesionario() {
    console.log('Concesionario Guardado');
}

//// Guardar Autos
function guardarAuto() {
    console.log('Auto Guardado');
}

//// Borrar Concesionario
function borrarConcesionarios(concesionario) {
    console.log('Concesionario Borrado');
}

//// Borrar Auto
function borrarAutos(auto) {
    console.log('Auto Borrado');
}

async function main() {
    inquirerMenu()
        .then(respuesta => {
            var obj = JSON.parse(respuesta);
            var opcion = obj['menu'];
            seleccionarOpcion(opcion);
        })
}

async function crearConcesionario(path) {
    inquirerConcesionario()
    .then(concesionario => guardarConcesionario(concesionario));
}

function crearAuto(path) {
    inquirerSeleccionarConcesionario()
    .then(respuesta => inquirerAuto(respuesta))
    .then(auto => guardarAuto(auto))
}

function mostrarConcesionario(path) {
    console.log(obtenerConcesionarios())
}

function mostrarAuto(path) {
    inquirerSeleccionarConcesionario()
    .then(respuesta => obtenerAutos(respuesta))
}

function actualizarConcesionario(path) {
    inquirerSeleccionarConcesionario()
    .then(respuesta => inquirerActualizarConcesionario(respuesta))
    .then(concesionario => guardarConcesionario(concesionario));
}

function actualizarAuto(path) {
    inquirerSeleccionarConcesionario()
    .then(respuesta => inquirerActualizarAuto(respuesta))
    .then(auto => guardarAuto(auto));
}

function borrarConcesionario(path) {
    inquirerSeleccionarConcesionario()
    .then(respuesta => borrarConcesionarios(respuesta))
}

function borrarAuto(path) {
    inquirerSeleccionarConcesionario()
    .then(respuesta => inquirerSeleccionarAuto(respuesta))
    .then(modelo => borrarAutos(modelo))
}

main();
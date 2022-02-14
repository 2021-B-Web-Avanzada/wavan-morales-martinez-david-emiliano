// Importaciones 
const inquirer = require('inquirer'); // Importando el Inquirer
const fs = require('fs');  // Importando File System
//const { addAbortSignal } = require('stream');
const path = require('path');
var filename = './concesionarios.json';
const jsonPath = path.join(__dirname, filename);


// Exportamos las funciones 
module.exports = {
    buscarConcesionario,
    buscarAutoConcesionario,
    obtenerConcesionarios,
    guardarConcesionario,
    updateConcesionarioAPI,
    borrarConcesionarios,
    obtenerAutos,
    guardarAutoAPI,
    updateAutoAPI,
    borrarAutosAPI
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
            crearConcesionario(jsonPath)
        }
        if (seleccion === 'Crear Auto') {
            crearAuto(jsonPath)
        }
        if (seleccion === 'Mostrar Concesionarios') {
            mostrarConcesionario(jsonPath)
        }
        if (seleccion === 'Mostrar Autos') {
            mostrarAuto(jsonPath)
        }
        if (seleccion === 'Actualizar Concesionario') {
            actualizarConcesionario(jsonPath)
        }
        if (seleccion === 'Actualizar Auto') {
            actualizarAuto(jsonPath)
        }
        if (seleccion === 'Borrar Concesionario') {
            borrarConcesionario(jsonPath)
        }
        if (seleccion === 'Borrar Auto') {
            borrarAuto(jsonPath)
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
async function inquirerActualizarConcesionario(concesionario) {
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
                {
                    type: 'input',
                    name: 'logo',
                    message: 'Ingrese el Logo: '
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
        for (let element of concesionarios) {
            if (element['nombreConcesionario'].toLowerCase().includes(concesionario.nombreConcesionario.toLowerCase())) {
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
    return concesionario;
}


// Seleccionar Auto
async function seleccionarAuto(concesionario) {
    let autos = [];
    buscarConcesionario(concesionario.nombreConcesionario).autos.forEach(element => {
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
    let concesionario = await seleccionarConcesionario();
    let auto = await inquirerAuto();
    let concesionarios = obtenerConcesionarios();
    for (element of concesionarios) {
        if (element['nombreConcesionario'].toLowerCase().includes(concesionario.nombreConcesionario.toLowerCase())) {
            element.autos.push(auto);
            break;
        }
    }
    escribirArchivo(concesionarios);
}

function guardarAutoAPI(concesionario, auto) {
    let concesionarios = obtenerConcesionarios();
    for (element of concesionarios) {
        if (element['nombreConcesionario'].toLowerCase().includes(concesionario.toLowerCase())) {
            element.autos.push(auto);
            break;
        }
    }
    escribirArchivo(concesionarios);
}

// READ

// Obtener Concesionarios
function obtenerConcesionarios() {
    const data = fs.readFileSync(jsonPath);
    const names = JSON.parse(data);
    return names;
}

// Obtener Autos
async function obtenerAutos(concesionario) {
    let concesionarios = obtenerConcesionarios();
    for (element of concesionarios) {
        if (element['nombreConcesionario'].toLowerCase().includes(concesionario.nombreConcesionario.toLowerCase())) {
            return element.autos;
        }
    }
}

// UPDATE

// Actualizar Concesionario
async function updateConcesionario(concesionario) {
    const concesionarios = obtenerConcesionarios();
    for (element of concesionarios) {
        if (element['nombreConcesionario'].toLowerCase().includes(concesionario.nombreConcesionario.toLowerCase())) {
            await inquirerActualizarConcesionario(element);
            break;
        }
    }
}

// Actualizar Concesionario API
function updateConcesionarioAPI(concesionario) {
    let concesionarios = obtenerConcesionarios();
    for (let element of concesionarios) {
        if (element['nombreConcesionario'].toLowerCase().includes(concesionario.nombreConcesionario.toLowerCase())) {
            var indice = concesionarios.findIndex(conce => conce.nombreConcesionario === concesionario.nombreConcesionario);
            concesionarios[indice] = concesionario;
            break;
        }
    }
    escribirArchivo(concesionarios);
}

// Actualizar Auto
async function updateAuto(nombreconcesionario) {
    const concesionario = buscarConcesionario(nombreconcesionario.nombreConcesionario);
    const autos = concesionario.autos;
    const auto = await seleccionarAuto(nombreconcesionario);
    for (element of autos) {
        if (element['modelo'].toLowerCase().includes(auto.modelo.toLowerCase())) {
            await inquirerActualizarAuto(nombreconcesionario, auto);
            break;
        }
    }
}

function updateAutoAPI(concesionario, auto) {
    let concesionarios = obtenerConcesionarios();
    for (let element of concesionarios) {
        if (element['nombreConcesionario'].toLowerCase().includes(concesionario.nombreConcesionario.toLowerCase())) {
            let carros = element.autos;
            const indice = carros.findIndex(car => car.modelo === auto.modelo);
            element.autos[indice] = auto;
            break;
        }
    }
    escribirArchivo(concesionarios);
}

// DELETE

// Borrar Concesionario
function borrarConcesionarios(nombreConcesionario) {
    try {
        let concesionarios = obtenerConcesionarios();
        for (element of concesionarios) {
            if (element['nombreConcesionario'].toLowerCase().includes(nombreConcesionario.toLowerCase())) {
                concesionarios.splice(concesionarios.indexOf(nombreConcesionario), 1);
                break;
            }
        }
        escribirArchivo(concesionarios);
    } catch (error) {
        console.error(error);
    }
}

// Borrar Auto
async function borrarAutos(nombreConcesionario) {
    try {
        let auto = await seleccionarAuto(nombreConcesionario);
        let concesionarios = obtenerConcesionarios();
        for (element of concesionarios) {
            if (element['nombreConcesionario'].toLowerCase().includes(nombreConcesionario.nombreConcesionario.toLowerCase())) {
                for (item of element.autos) {
                    if (item.modelo.toLowerCase().includes(auto.modelo.toLowerCase())) {
                        element.autos.splice(element.autos.indexOf(item), 1);
                        break;
                    }
                }
            }
        }
        escribirArchivo(concesionarios);
    } catch (error) {
        console.error(error);
    }
    console.log('Auto Borrado');
}

function borrarAutosAPI(concesionario, modelo) {
    let concesionarios = obtenerConcesionarios();
    for (element of concesionarios) {
        if (element['nombreConcesionario'].toLowerCase().includes(concesionario.toLowerCase())) {
            for (item of element.autos) {
                if (item.modelo.toLowerCase().includes(modelo.toLowerCase())) {
                    element.autos.splice(element.autos.indexOf(item), 1);
                    break;
                }
            }
        }
    }
    escribirArchivo(concesionarios);
}

// Escritura en el archivo
function escribirArchivo(data) {
    fs.writeFileSync(jsonPath, JSON.stringify(data));
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

// Auto por el Nombre
function buscarAutoConcesionario(concesionario, modelo) {
    const autos = concesionario.autos.filter(function (auto) {
        return auto.modelo.toLowerCase().includes(modelo.toLowerCase());
    })
    return autos;
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

if (require.main === module) {
    main();
}

//main();
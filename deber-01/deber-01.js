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
async function inquirerAuto(concesionario) {
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
            ]);

            const concesionarioCompleto = {
                ...concesionario,
                ...nuevoConcesionario
            }
            let concesionarios = obtenerConcesionarios();
            const indice = concesionarios.findIndex(concesionario => concesionario['nombreConcesionario'] === concesionarioCompleto.nombreConcesionario);
            concesionarios[indice] = concesionarioCompleto;
            fs.writeFileSync(path, JSON.stringify(concesionarios));
            console.log('Autor Actualizado')
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
            name: 'nombreConcesionario',
            message: 'Escoja un Concesionario: ',
            choices: co,
        },
    ]);
    return concesionario.nombreConcesionario;
}

//// Seleccionar Auto
async function inquirerSeleccionarAuto(concesionario) {
    let au = [];
    let concesionarios = obtenerConcesionarios();
    for (element of concesionarios){
        if(element['nombreConcesionario'].toLowerCase().includes(concesionario.toLowerCase())){
            au.push(element.modelo);
        }
    }
    const auto = await inquirer.prompt([
        {
            type: 'list',
            name: 'modelo',
            message: 'Escoja un Auto: ',
            choices: au,
        },
    ]);
    return auto.modelo;
}

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
            console.log(element.autos);
        }
    }
}

// Guardar Concesionarios
function guardarConcesionario(concesionario) {
    concesionario.autos = [];
    let concesionarios = obtenerConcesionarios();
    concesionarios.push(concesionario);
    fs.writeFileSync(path, JSON.stringify(concesionarios));
}

// Guardar Autos
async function guardarAuto() {
    let concesionario = await inquirerSeleccionarConcesionario();
    let auto = await inquirerAuto();
    let concesionarios = obtenerConcesionarios();
    for (element of concesionarios){
        if(element['nombreConcesionario'].toLowerCase().includes(concesionario.toLowerCase())){
            element.autos.push(auto);
            break;
        }
    }
    fs.writeFileSync(path, JSON.stringify(concesionarios));
}

// Actualizar Concesionario
async function actualizarConcesionarios(concesionario){
    let concesionarios = obtenerConcesionarios();
    for (element of concesionarios){
        if(element['nombreConcesionario'].toLowerCase().includes((concesionario).toLowerCase())){
            await inquirerActualizarConcesionario(concesionario);
            break;
        }
    }

}

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
        fs.writeFileSync(path, JSON.stringify(concesionarios));
    } catch (error){
        console.error(error);
    }
}

//// Borrar Auto
async function borrarAutos(concesionario) {
    try{
        let auto = await inquirerSeleccionarAuto(concesionario);
        let concesionarios = obtenerConcesionarios();
        let autos = obtenerAutos(concesionario);
        for (element of concesionarios){
            if(element['nombreConcesionario'].toLowerCase().includes(concesionario.toLowerCase())){
                for (item of concesionario.autos){
                    if(item.modelo.toLowerCase().includes(auto.toLowerCase())){
                        concesionario.autos.splice(concesionario.autos.indexOf(item), 1);
                        break;
                    }
                }
            }
        }
        fs.writeFileSync(path, JSON.stringify(concesionarios));
    } catch (error){
        console.error(error);
    }
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
    guardarAuto();
}

function mostrarConcesionario(path) {
    console.log(obtenerConcesionarios())
}

function mostrarAuto(path) {
    inquirerSeleccionarConcesionario()
    .then(concesionario => obtenerAutos(concesionario));
}

//
function actualizarConcesionario(path) {
    inquirerSeleccionarConcesionario()
    .then(concesionario => actualizarConcesionarios(concesionario));
}

//
function actualizarAuto(path) {
    inquirerSeleccionarConcesionario()
    .then(respuesta => inquirerActualizarAuto(respuesta))
    .then(auto => guardarAuto(auto));
}

function borrarConcesionario(path) {
    inquirerSeleccionarConcesionario()
    .then(respuesta => borrarConcesionarios(respuesta))
}

//
function borrarAuto(path) {
    inquirerSeleccionarConcesionario()
    .then(respuesta => borrarAutos(respuesta))
}

main();
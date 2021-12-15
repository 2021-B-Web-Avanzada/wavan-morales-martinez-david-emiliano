// Frameworks y librerias
const{Router, request} = require('express');
const router = Router();
const _ = require('underscore');
const data = require('../concesionarios.json');

// Consulta Concesionarios
router.get('/', (req, res) =>{
    res.json(data);
});

// Crear Concesionarios
router.post('/', (req, res) =>{
    const { nombre, direccion, telefono, abierto, web} = req.body;
    if( nombre && direccion && telefono && abierto && web) {
        const id = data.length + 1;
        const newConcesionario = { ...req.body, id};
        data.push(newConcesionario);
        res.json(data);
    } else {
        res.status(500).json({ "error": " Error en la creación de concesionarios"});
    }
});

// Actualizar Concesionarios
router.put('/:id',(req, res) =>{
    const{id} = req.params;
    const {nombre, direccion, telefono, abierto, web} = req.body;
    if (nombre&&direccion&&telefono&&abierto&&web) {
        _.each(data, (concesionario, i)=>{
            if (concesionario.id == id){
                concesionario.nombre = nombre;
                concesionario.direccion = direccion;
                concesionario.telefono = telefono;
                concesionario.abierto = abierto;
                concesionario.web = web;
            }
        });
        res.json(data);
    } else {
        res.status(500).json({ "error": " Error en la actualización de concesionarios"});
    }
} )

// Borrar Concesionarios
router.delete('/:id', (req, res)=>{
    const{id} = req.params;
    _.each(data, (concesionario, i) => {
        if (concesionario.id = id){
            data.splice(i, 1);
        }
    });
    res.send(data);
})

module.exports =router;


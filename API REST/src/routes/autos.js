// Frameworks y librerias
const{Router, request} = require('express');
const router = Router();
const _ = require('underscore');
const data = require('../concesionarios.json');

// Consulta Autos
router.get('/', (req, res) =>{
    res.json(data);
});

// Crear Autos
router.post('/', (req, res) =>{
    const { modelo, año, cilindraje, color, precio} = req.body;
    if( modelo && año && cilindraje && color && precio) {
        const id = data.length + 1;
        const newAuto = { ...req.body, id};
        data.push(newAuto);
        res.json(data);
    } else {
        res.status(500).json({ "error": " Error en la creación de autos"});
    }
});

// Actualizar Autos 
router.put('/:id',(req, res) =>{
    const{id} = req.params;
    const { modelo, año, cilindraje, color, precio} = req.body;
    if( modelo && año && cilindraje && color && precio) {
        _.each(data, (auto, i)=>{
            if (auto.id == id){
                auto.modelo = modelo;
                auto.año = año;
                auto.cilindraje = cilindraje;
                auto.color = color;
                auto.precio = precio;
            }
        });
        res.json(data);
    } else {
        res.status(500).json({ "error": " Error en la actualización de autos"});
    }
} )

// Borrar Autos
router.delete('/:id', (req, res)=>{
    const{id} = req.params;
    _.each(data, (auto, i) => {
        if (auto.id = id){
            data.splice(i, 1);
        }
    });
    res.send(data);
})

module.exports =router;


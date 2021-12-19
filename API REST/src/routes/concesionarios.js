// Frameworks y librerias
const{Router, request} = require('express');
const router = Router();
const path = require('path');
const jsPath = path.join(_dirname, '..', '..', '..', 'deber-01', 'concesionarios.js');
const data = require('jsPath');

// GET

// Consulta Concesionarios
router.get('/', (req, res) =>{
    res.json(data);
});

// Concesionarios
router.get('/concesionario', (req, res) => {
    res.json(dataModule.obtenerConcesionarios());
})

// POST

// Crear Concesionarios
router.post('/concesionario', (req, res) =>{
    try {
        let nombreConcesionario = req.body.nombreConcesionario;
        let direccion = req.body.direccion;
        let telefono = req.body.telefono;
        let abierto = req.body.abierto;
        let web = req.body.web;
        if (nombreConcesionario !== undefined && direccion !== undefined && telefono !== undefined && abierto !== undefined && web !== undefined) {
            let concesionario = {
                nombreConcesionario: nombreConcesionario,
                direccion: direccion,
                telefono: telefono,
                abierto: abierto,
                web: web,
                autos: []
            };
            console.log(concesionario);

            dataModule.guardarConcesionario(concesionario);
            res.json({
                "message": "Concesionario creado con exito"
            });
        } else {
            res.json({
                "error": "Error al crear el concesionario"
            });
        }
    } catch (e) {
        res.json(
            {
                "error": "Error al buscar concesionario"
            }
        );
    }
});

// Crear Autos
router.post('/autos', (req, res) => {
    try {

        let marca = req.body.marca;
        let año = req.body.año;
        let abierto = req.body.abierto;
        let color = req.body.color;
        let precio = req.body.precio;

        if (marca !== undefined && año !== undefined && abierto !== undefined && color !== undefined && precio !== undefined ) {
            let auto = {
                marca: marca,
                año: año,
                abierto: abierto,
                color: color,
                precio: precio,

            };
            dataModule.saveBook(nombre, auto);
            res.json({
                "message": "Auto creado con exito"
            });
        } else {
            res.json({
                "error": "Error al crear el auto"
            });
        }
    } catch (e) {
        res.json(
            {
                "error": "Error al buscar concesionario"
            }
        );
    }
})



// Actualizar Concesionarios
router.put('/:ideParent&:idChildren', (req, res) => {
    console.log(req.params);
    res.json(
        {
            "error": "Error al buscar concesionario"
        }
    );
})

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
router.delete('/concesionario/:nombreConcesionario', (req, res) => {
    console.log(req.params);
    const autorName = req.params.nombreConcesionario;

    try {
        dataModule.borrarConcesionario(nombreConcesionario);
        res.json(
            {
                "response": "Concesionario Borrado"
            }
        );
    } catch (e) {
        res.json(
            {
                "error": "Error al eliminar concesionario"
            }
        );
    }
})

router.delete('/autos/:nombreConcesionario&:marca', (req, res) => {
    console.log(req.params);
    const nombreConcesionario = req.params.nombreConcesionario;
    const marca = req.params.marca;

    try {
        dataModule.borrarConcesionario(nombreConcesionario, marca);
        res.json(
            {
                "response": "Concesionario Borrado"
            }
        );
    } catch (e) {
        res.json(
            {
                "error": "Error al eliminar concesionario"
            }
        );
    }
})

module.exports =router;


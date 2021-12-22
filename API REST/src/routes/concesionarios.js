// Frameworks y librerias
const{Router, request} = require('express');
const router = Router();
const path = require('path');
const jsPath = path.join(_dirname, '..', '..', '..', 'deber-01', 'deber-01.js');
const data = require(jsPath);

// GET

// Consulta Concesionarios
router.get('/', (req, res) =>{
    res.json(
        {
            "Title": "API de los concesionarios y sus autos"
        }
    );
});

// Concesionarios
router.get('/concesionario', (req, res) => {
    res.json(data.obtenerConcesionarios());
})

// Concesionario Específico (Nombre)
router.get('/concesionario/:nombreConcesionario', (req, res) => {
    try {
        if (req.query.concesionario !== "") {
            let nombreConcesionario = req.params.nombreConcesionario;
            let concesionarioEncontrato = data.buscarConcesionario(nombreConcesionario);
            res.json(concesionarioEncontrato);
        } else {
            res.json(
                {
                    "error": "Concesionario no encontrado"
                }
            );
            res.sendStatus('400')
        }
    } catch (e) {
        res.sendStatus('400')
    }

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
        if (nombreConcesionario !== undefined && direccion !== undefined && telefono !== undefined && nuevo !== undefined && web !== undefined) {
            let concesionario = {
                nombreConcesionario: nombreConcesionario,
                direccion: direccion,
                telefono: telefono,
                abierto: abierto,
                web: web,
                autos: []
            };
            console.log(concesionario);

            data.guardarConcesionario(concesionario);
            res.json({
                "message": "Concesionario creado con exito"
            });
        } else {
            res.json({
                "error": "Error al crear el Concesionario"
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
        let modelo = req.body.modelo;
        let año = req.body.año;
        let nuevo = req.body.nuevo;
        let color = req.body.color;
        let precio = req.body.precio;

        if (modelo !== undefined && año !== undefined && nuevo !== undefined && color !== undefined && precio !== undefined ) {
            let auto = {
                modelo: modelo,
                año: año,
                nuevo: nuevo,
                color: color,
                precio: precio,

            };
            data.saveBook(nombre, auto);
            res.json({
                "message": "Auto creado con exito"
            });
        } else {
            res.json({
                "error": "Error al crear el Auto"
            });
        }
    } catch (e) {
        res.json(
            {
                "error": "Error al buscar Concesionario"
            }
        );
    }
})



// Actualizar Concesionarios
router.put('/concesionario/:nombreConcesionario', (req, res) => {
    try {
        let nombreConcesionario = req.body.nombreConcesionario;
        let direccion = req.body.direccion;
        let telefono = req.body.telefono;
        let abierto = req.body.abierto;
        let web = req.body.web;
        if (nombreConcesionario !== undefined && direccion !== undefined && telefono !== undefined && abierto !== undefined && web !== undefined) {
            let nuevoConcesionario = {
                direccion: direccion,
                telefono: telefono,
                abierto: abierto,
                web: web
            };
        let concesionario = data.buscarConcesionario(nombreConcesionario);
        const concesionarioCompleto = {
                ...concesionario,
                ...nuevoConcesionario
         }
        data.updateConcesionario(autorCompleto);
        res.json(
            {
                "message": "Concesionario actualizado con éxito"
            }
        );
    } else {
        res.json(
            {
                "error": "Error al actualizar Concesionario"
            }
        );
    }
} catch (e) {
    res.json(
        {
            "error": "Error al actualizar el Concesionario"
        }
    );
}
})

// Actualizar Autos
router.put('/autos/:nombreConcesionario&:modelo', (req, res) => {
    try {
        let modelo = req.body.modelo;
        let año = req.body.año;
        let nuevo = req.body.nuevo;
        let color = req.body.color;
        let precio = req.body.precio;
        if (modelo !== undefined && año !== undefined && nuevo !== undefined && color !== undefined && precio !== undefined) {
            let nuevoAuto = {
                año = año,
                nuevo = nuevo,
                color = color,
                precio = precio
            };
//------METODO A IMPLEMENTAR            
            const auto = buscarAutoConcesionario();
            const autoCompleto = {
                ...auto,
                ...nuevoAuto
            }
            updateAuto(concesionario, autoCompleto);
            
            res.json(
                {
                    "message": "Auto actualizado con éxito"
                }
            );
    } else{
        res.json(
            {
                "error": "Error al actualizar el Auto"
            }
        );
    }
} catch (e){
    res.json(
        {
            "error": "Error al actualizar el Auto"
        }
    );
}

})

// Borrar Concesionarios
router.delete('/concesionario/:nombreConcesionario', (req, res) => {
    console.log(req.params);
    const autorName = req.params.nombreConcesionario;

    try {
        data.borrarConcesionario(nombreConcesionario);
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

router.delete('/autos/:nombreConcesionario&:modelo', (req, res) => {
    console.log(req.params);
    const nombreConcesionario = req.params.nombreConcesionario;
    const modelo = req.params.modelo;

    try {
        data.borrarConcesionario(nombreConcesionario, modelo);
        res.json(
            {
                "response": "Auto Borrado"
            }
        );
    } catch (e) {
        res.json(
            {
                "error": "Error al eliminar auto"
            }
        );
    }
})

module.exports =router;


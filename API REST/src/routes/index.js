// Frameworks
const {Router} = require('express');
const router = Router();

// Raíz
router.get('/', (req, res) => {
    res.json(
        {
            "Title": "Hola Mundo RUTAS"
        }
    );
})

module.exports = router
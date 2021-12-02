//11-inquirer.js

const inquirer = require('inquirer');

// Necesitamos instalar inquirer
async function main() {
    try{
        const respuesta = await inquirer
            .prompt([
                {
                    type:'input',
                    name: 'apellido',
                    message: 'Ingresa tu Nombre: '
                },
                {
                    type:'input',
                    name: 'edad',
                    message: 'Ingresa tu Edad: '
                }
            ]);
        console.log('Respuesta', respuesta);
    } catch (e) {
        console.error(e);
    }
}

main();

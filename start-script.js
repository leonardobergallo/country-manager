const { exec } = require('child_process');

// Comando para iniciar el proyecto de React
const startCommand = 'npm start';

// Directorio del proyecto
const projectDirectory = '<C:\Users\leona\Desktop\Proyecto de country para ingreso\CountryResidenceManagement\country-manager>';

// Cambiar al directorio del proyecto
process.chdir(projectDirectory);

// Ejecutar el comando para iniciar el proyecto de React
exec(startCommand, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error al ejecutar el comando: ${error}`);
        return;
    }

    console.log(stdout);
});

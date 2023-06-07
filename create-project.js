const fs = require('fs');
const { execSync } = require('child_process');

// Crea las carpetas
const folders = [
    'src/components',
    'src/api',
    'src/public/css',
    'src/public/js'
];

folders.forEach(folder => {
    try {
        fs.mkdirSync(folder);
        console.log(`Created folder: ${folder}`);
    } catch (error) {
        console.error(`Error creating folder: ${folder}`);
        console.error(error);
    }
});

// Cambia al directorio "src"
process.chdir('src');

// Crea los archivos iniciales
fs.writeFileSync('components/Navbar.js', '');
fs.writeFileSync('components/CarForm.js', '');
fs.writeFileSync('components/ResidentList.js', '');
fs.writeFileSync('api/api.js', '');

// Instala las dependencias necesarias
execSync('npm install express mongoose');

// Crea el archivo de configuración de Express
fs.writeFileSync('server.js', `
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001;

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost/country-manager', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log('Server is running on port ' + port);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

// Configuración adicional de Express
app.use(express.json());

// Rutas de la API
const carRoutes = require('./api/carRoutes');
const residentRoutes = require('./api/residentRoutes');

app.use('/api/cars', carRoutes);
app.use('/api/residents', residentRoutes);

module.exports = app;
`);

// Crea las rutas iniciales
fs.writeFileSync('api/carRoutes.js', `
const express = require('express');
const router = express.Router();

// Rutas para los autos

module.exports = router;
`);

fs.writeFileSync('api/residentRoutes.js', `
const express = require('express');
const router = express.Router();

// Rutas para los residentes

module.exports = router;
`);

console.log('¡Proyecto creado exitosamente!');




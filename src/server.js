
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

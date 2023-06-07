const mongoose = require('mongoose');

// Definir el esquema del modelo
const carSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
});

// Crear el modelo a partir del esquema
const Car = mongoose.model('Car', carSchema);

module.exports = Car;

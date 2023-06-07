const mongoose = require('mongoose');

// Conectar a la base de datos de MongoDB
mongoose.connect('mongodb://localhost/card-form', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Conexión exitosa a la base de datos');
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });

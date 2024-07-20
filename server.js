const express = require('express');
const mongoose = require('mongoose');
const reviewRoutes = require('./routes/reviewRoutes');
const app = express();
const port = 3013;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/review_db', {

})
.then(() => console.log('Conectado a MongoDB'))
.catch((error) => console.error('Error al conectar a MongoDB:', error));

// Middleware para JSON
app.use(express.json());

// Rutas
app.use('/', reviewRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

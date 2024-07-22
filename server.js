const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const reviewRoutes = require('./routes/reviewRoutes');
const app = express();
const port = 3013;

const uri = 'mongodb+srv://admin:admin@cluster0.acc1is2.mongodb.net/review_db?retryWrites=true&w=majority&appName=Cluster0';;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch((error) => console.error('Error al conectar a MongoDB Atlas:', error.message));
app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
}));

// Middleware para JSON
app.use(express.json());

// Rutas
app.use('/', reviewRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

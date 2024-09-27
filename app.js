const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 3005;

// Middleware para parsear JSON
app.use(express.json());

// Ruta principal
//app.get('/', (req, res) => {
//    res.send('¡Hola, mundo!');
//});

// Ruta principal
app.use(express.static(path.join(__dirname, './View'))); // servir archivos estáticos desde la carpeta `index`

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/maestra')
.then(() => {
    console.log('Conectado a MongoDB');
})
.catch(err => {
    console.error('Error al conectar a MongoDB:', err);
});

//ruta del archivo
app.use('/api/persons',require('./Routes/personroutes'));

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
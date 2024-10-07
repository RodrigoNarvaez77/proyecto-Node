const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
// Middleware para servir archivos estáticos desde la carpeta View
app.use(express.static(path.join(__dirname, './View')));

// Ruta principal que redirige a login.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './View/login.html'));
});

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/maestra')
.then(() => {
    console.log('Conectado a MongoDB');
})
.catch(err => {
    console.error('Error al conectar a MongoDB:', err);
});

const User = mongoose.model('usuarios', new mongoose.Schema({
    username: String,
    password: String,
}));

//async function createUser(username, password) {
//    const hashedPassword = await bcrypt.hash(password, 10); // Hashea la contraseña
//    const newUser = new User({ username, password: hashedPassword });
//    await newUser.save();
//}

// Llama a esta función con el nombre de usuario y la contraseña
//createUser('rodrigofinal', 'rodrigo1');

// Ruta para manejar el login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Buscar el usuario en la base de datos
    const user = await User.findOne({ username });
    if (user) {

        // Comparar la contraseña ingresada con la almacenada
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            return res.status(200).send('Login exitoso');
        }
    }
    res.status(401).send('Credenciales inválidas');
});

//ruta del archivo
app.use('/api/persons',require('./Routes/personroutes'));

//revisar cambios y nuevos

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
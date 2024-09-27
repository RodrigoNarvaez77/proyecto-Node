const mongoose = require('mongoose'); //requiere instalacion mongo
const {Schema} = mongoose; // desestructura Schema del objeto mongoose

//Modelo Login
const LoginSchema = new Schema({
    usuario:{type:String,require:true},
    contrasena:{type:Number,require:true},
    //definicion con sus atributos
}, {collection:'usuarios'});

const Login = mongoose.model('login',LoginSchema); //Estoy guardando en una variable tipo const lo que voy obteniendo de mi modelo 'LoginSchema' es un constructor.
module.exports = Login; //permite crear o visualizar el tipo json de proyecto.

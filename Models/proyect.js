const mongoose = require('mongoose'); //requiere instalacion mongo
const {Schema} = mongoose; // desestructura Schema del objeto mongoose

//Modelo proyects
const ProyectSchema = new Schema({
    proyecto:{type:String,require:true},
    area:{type:String,require:true},
    //definicion con sus atributos
}, {collection:'proyectos'});

const Proyect = mongoose.model('proyect',ProyectSchema); //Estoy guardando en una variable tipo const lo que voy obteniendo de mi modelo 'ProyectSchema' es un constructor.
module.exports = Proyect; //permite crear o visualizar el tipo json de proyecto.

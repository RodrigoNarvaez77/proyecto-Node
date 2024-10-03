const mongoose = require('mongoose'); //requiere instalacion mongo
const {Schema} = mongoose; // desestructura Schema del objeto mongoose

//Modelo PersonProyects
const PersonProyectsSchema = new Schema({
    proyecto:{type:String,require:true},
    funcionario:{type:String,require:true},
    //definicion con sus atributos
}, {collection:'personaproyecto'});

const PersonProyects = mongoose.model('personproyects',PersonProyectsSchema); //Estoy guardando en una variable tipo const lo que voy obteniendo de mi modelo 'PersonSchema' es un constructor.
module.exports = PersonProyects; //permite crear o visualizar el tipo json de personproyects.
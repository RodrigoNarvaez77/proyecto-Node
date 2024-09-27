const mongoose = require('mongoose'); //requiere instalacion mongo
const {Schema} = mongoose; // desestructura Schema del objeto mongoose

//Modelo Person
const PersonSchema = new Schema({
    name:{type:String,require:true},
    lastName:{type:String,require:true},
    works:{type:String,require:true},
    nationality:{type:String,require:true},
    year:{type:Number,require:true}
    //definicion con sus atributos
}, {collection:'funcionario'});

const Person = mongoose.model('person',PersonSchema); //Estoy guardando en una variable tipo const lo que voy obteniendo de mi modelo 'PersonSchema' es un constructor.
module.exports = Person; //permite crear o visualizar el tipo json de person.

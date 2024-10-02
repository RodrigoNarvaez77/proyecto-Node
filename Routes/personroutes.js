const express = require('express');
const router = express.Router(); //crear las instancias del crud
const Person = require('../Models/index').person;
const Proyect = require('../Models/index').proyect;

//Ingresar una nueva persona
router.post('/',async (req,res) =>{

    const person = new Person(req.body);
    try{
        const result = await person.save();

        res.status(200).json(result);
    }catch(err){
        res.status(500).json({mensaje: err.mesagge});

    }

});

//Mostrar Todos los Registros de personas
router.get('/',async(req,res) =>{
    try{
        const persons = await Person.find();
        console.log(persons);
        res.status(200).json(persons);
    }catch(err){
        res.status(500).json({mensaje: err.message});
    }
});

//Mostrar todos los proyectos
router.get('/proyectos',async(req,res)=>{
    try{
        const proyectos = await Proyect.find();
        console.log(proyectos);
        res.status(200).json(proyectos);
    }catch(err){
        res.status(500).json({mensaje: err.menssage})
    }

});

//Mostrar  registro por ID
router.get('/:id',async(req,res) =>{
    const { id } = req.params
    try{
        const persons = await Person.findById(id);
        res.status(200).json(persons);
    }catch(err){
        res.status(500).json({mensaje: err.message});
    }
});

//Eliminar por ID
router.delete('/:id',async(req,res) =>{
const { id } = req.params  //obtener parametro URL  
try{
    const person = await Person.findByIdAndDelete(id);
    if(!person){
        return res.status(404).json({mensaje:'Persona no entontrada'});
    }
    //console.log(person);
    //console.log("hola mundoooooo");
    //res.status(200).json(person)
}catch(err){
    res.status(500).json({mensaje: err.message});
}   
});

//Editar un registro por ID
router.put('/:id',async(req,res) =>{
    const { id } = req.params
    const updateperson = req.body
try{
    //console.log(`updatePerson: ${JSON.stringify(updateperson)}`);
    const person = await Person.findByIdAndUpdate(id,updateperson,{new:true});
    //console.log(`updatePerson: ${person}`);
    res.status(200).json(person);
}catch(err){
    res.status(500).json({mensaje: err.message});
}
});

//codigo antiguo

//Listar todos los trabajos de una persona.
router.get('/works/:id',async(req,res) =>{
    const { id } = req.params
    try{
        const person = await Person.findById(id,'works');//campo que contiene los trabajos
        res.status(200).json(person);
    }catch(err){
    res.status(500).json({mensaje: err.message});
}
});

//Ingresar nuevo trabajo a una persona
router.post('/works/:id',async(req,res) =>{
    const { id } = req.params; //Obtener ID de la URL
    const newworks = req.body; //Obtener el nuevo trabajo del cuerpo de la solicitud
try{ 
    const person = await Person.findById(id); 
    person.works.push(newworks); //Agregar nuevo trabajo al listado de trabajos.
    const savenewworks = await person.save() //guarda la operacion.
    res.status(200).json(savenewworks);
}
catch(err){
    res.status(500).json({mensaje: err.message});
}
});

//Eliminar un trabajo a una persona.
router.delete('/works/:id/:idworks',async(req,res) =>{
    const { id,idworks } = req.params;
    try{
        const person = await Person.findById(id);
        person.works = person.works.filter(work => work.id.toString() !== idworks); //funcion que define que cada id de trabajador debe ser distinto a idworks , de no estar funcion eliminaria todos los registros, para esto realiza un filtrado
        console.log(`ID del trabajo a eliminar: ${idworks}`);
        console.log(`Array: ${person}`);
        await person.save();
        res.status(200).json(person);
    }catch(err){
        res.status(500).json({mensaje: err.message});
    }
});

//Modificar un trabajo de una persona
router.put('/works/:id/:idworks',async(req,res) =>{
const {id,idworks} = req.params;
const updateworks = req.body;
try{
    const updatedPersonworks = await Person.findOneAndUpdate(
        { _id: id, 'works._id': idworks }, // Filtro para encontrar la persona y sus trabajos
        { $set: { 'works.$': updateworks } }, // Actualización de sus trabajos el $ trae el primer documento que se cumple la condicion de arriba
        { new: true, runValidators: true } // Devuelve el registro modificado
    );
    res.status(200).json(updatedPersonworks);
}
catch(err){
res.status(500).json({mensaje: err.message});
}
});

module.exports = router;
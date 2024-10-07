const express = require('express');
const { proyect, personproyects } = require('../Models/index');
const router = express.Router(); //crear las instancias del crud
const Person = require('../Models/index').person;
const Proyect = require('../Models/index').proyect;
const PersonProyects = require('../Models/index').personproyects;

//Ingresar una nueva persona
router.post('/', async (req, res) => {
    try {
        // Verificar si ya existe una persona con el mismo nombre, por ejemplo

            // Aquí se verifica si ya existe una persona con el mismo nombre y apellido
            const existingPerson = await Person.findOne({
                name: req.body.name,
                lastName: req.body.lastName
            });
    
            if (existingPerson) {
                return res.status(400).json({ mensaje: "La persona ya existe." });
            }    

        const person = new Person(req.body);
        const result = await person.save();
        res.status(201).json(result); // Cambié el estado a 201 para creación exitosa
    } catch (err) {
        console.error(err); // Agrega esto para ver el error en la consola
        res.status(500).json({ mensaje: err.message });
    }
});

router.post('/personasproyectos',async (req,res) =>{

    const personproyects = new PersonProyects(req.body);
    try{
        const result = await personproyects.save();

        res.status(200).json(result);
    }catch(err){
        res.status(500).json({mensaje: err.mesagge});

    }

});

//Ingresar una nuevo proyecto
router.post('/proyectos/ingresarproyecto', async (req, res) => {
    try {
        // Verificar si ya existe una proyecto con el mismo nombre

            // Aquí se verifica si ya existe una persona con el mismo nombre y apellido
            const existingProyect = await Proyect.findOne({
                proyecto: req.body.proyecto,
                area: req.body.area
            });

            const { proyecto, area } = req.body;
            console.log(req.body); 
    
            if (existingProyect) {
                return res.status(400).json({ mensaje: "Proyecto ya existe." });
            }    

        const proyect = new Proyect(req.body);
        const result = await proyect.save();
        res.status(201).json(result); // Cambié el estado a 201 para creación exitosa
    } catch (err) {
        console.error(err); // Agrega esto para ver el error en la consola
        res.status(500).json({ mensaje: err.message });
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

//Mostrar todas las personas y proyectos
router.get('/proyectos/personaproyecto',async(req,res)=>{
    try{
        const personaproyectos = await PersonProyects.find();
        console.log(personaproyectos);
        res.status(200).json(personaproyectos);
    }catch(err){
        res.status(500).json({mensaje: err.menssage})
    }
});


module.exports = router;
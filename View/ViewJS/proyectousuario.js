document.addEventListener('DOMContentLoaded', () => {//esperar que carge el doom
    document.getElementById('boton').addEventListener('click', async () => {
        await capturar();
    });
});

async function capturar() {
    try{
    const personas = document.getElementById("opciones").value;
    const proyectos = document.getElementById("projectSelect").value;
    console.log(personas);
    console.log(proyectos);

    const personaproyecto = {
        proyecto: proyectos,
        funcionario: personas
    }

    const response = await fetch('/api/persons/personasproyectos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(personaproyecto)
    });

    if(response.ok){
        alert("Registros Guardados Exitosamente");
    }

    else{
        alert("Error al Guardar Registros");
    }

    }catch(err){
        console.err("error",console);
    }

}
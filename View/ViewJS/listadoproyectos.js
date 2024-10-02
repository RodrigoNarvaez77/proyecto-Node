async function proyectos() {
    try{ 
    const response = await fetch("http://localhost:3005/api/persons/proyectos");
    const data = await response.json();
    console.log(data);
    const vproyecto = document.getElementById("projectSelect");
    data.forEach(item => {
        const nuevasopciones = document.createElement('option');
        nuevasopciones.textContent = item.proyecto;
        vproyecto.appendChild(nuevasopciones);
    });
    }catch(error){
        console.error('error',error)
    }
}  
proyectos()
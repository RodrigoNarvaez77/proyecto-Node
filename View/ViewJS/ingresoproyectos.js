let isSubmitting = false; 
document.addEventListener('DOMContentLoaded', () => {//esperar que carge el doom
    document.getElementById('addProyectoForm').addEventListener('submit', async (event) => {
        event.preventDefault(); 
        await capturar();
    });
});
async function capturar() {
    try{ 
        const proyecto = document.getElementById("proyecto").value
        const area = document.getElementById("area").value
        //console.log("Las areas son:",area,proyecto);

        const proyectos = {
            proyecto: proyecto,
            area: area
        }
        //console.log(proyectos);

        const response = await fetch("api/persons/proyectos/ingresarproyecto",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(proyectos)
    });
        if(response.ok){
            alert("Registro Ingresado Correctamente");
        }

        else{
            alert("Registro No Ingresado");
        }

    }catch(error){
        console.log("El error es",error);
    }
}


let isSubmitting = false; 
document.addEventListener('DOMContentLoaded', () => {//esperar que carge el doom
    document.getElementById('addFuncionarioForm').addEventListener('submit', async (event) => {
        event.preventDefault(); 
        await capturar();
    });
});

async function capturar() {
    try{
        const nombre = document.getElementById("name").value;
        const lastname = document.getElementById("lastName").value
        const works = document.getElementById("works").value
        const nationality = document.getElementById("nationality").value
        const year = document.getElementById("year").value
    
        const persona = {
            name:nombre,
            lastName: lastname,
            works: works,
            nationality: nationality,
            year:year 
        }
        console.log(persona);

        const response = await fetch("api/persons/", { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(persona)
        });

        if(response.ok){
            alert("Funcionario Ingresado Correctamente");
        }
        else{
            alert("Error al ingresar datos");
        }
    }catch(error){
        console.error("Error:",error);
    }
}
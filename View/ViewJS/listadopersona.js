//const option = document.getElementById("hola")
//option.addEventListener('change',function(){
//console.log(`Seleccionaste: ${this.value}`)
//});
async function usuarios(){
    try{
        const response = await fetch("http://localhost:3005/api/persons");
        const data = await response.json();
        console.log(data);

        const option = document.getElementById("opciones");

        data.forEach(item =>{
            const nuevasopciones = document.createElement('option');
            console.log(nuevasopciones);
            nuevasopciones.textContent = item.name;
            option.appendChild(nuevasopciones);
        });

    }catch(error){
        console.error('error',error);
    }
}

usuarios();

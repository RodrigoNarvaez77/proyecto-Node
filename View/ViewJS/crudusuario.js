async function crudusuario (){
    try{
        const response = await fetch("http://localhost:3005/api/persons");
        const data = await response.json();
        console.log(data);

        const tbody = document.getElementById("data-list");
        tbody.innerHTML = '';

        
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.lastName}</td>
                <td>${item.works}</td>
                <td>${item.nationality}</td>
                <td>${item.year}</td>
                <td><a href="modificar.html?id=${item._id};"><span class="bi bi-pencil"></span></a></td>
                <td><a href="#" data-href="Eliminar.php?id=${item.id}" data-toggle="modal" data-target="#confirm-delete"><span class="bi bi-trash"></span></a></td>
            `;
            tbody.appendChild(row);
        });

    }catch(error){
        console.error('error',error);
    }
}

crudusuario()
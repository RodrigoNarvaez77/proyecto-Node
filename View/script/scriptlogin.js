document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('boton').addEventListener('click', async (event) => {
        event.preventDefault(); // Previene el envío del formulario
        await login();
    });
});

async function login() {

    const username = document.getElementById('username').value;
    console.log('el usuario es',username);
    const password = document.getElementById('password').value;
    console.log('la clave es',password);

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        window.location.href = '/index.html'; // Redirige a index.html
    } else {
        alert('Error en el login');
    }
}
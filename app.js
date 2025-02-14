// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creacion de lista

let amigos = [];

//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
function agregarAmigo() {
    
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // Eliminar espacios en blanco

    //Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
    if (nombreAmigo === " ") {
            alert("Por favor, inserte un nombre.");
            return; // Salir de la función si el campo está vacío
        }

        // Actualizar el array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = '';

    // Actualizar la lista de amigos en la interfaz
    actualizarListaAmigos();
}
// Mostrar un mensaje de confirmación: "Amigo agregado con éxito."

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista actual

    // Agregar cada amigo a la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo; // Establecer el texto del elemento de lista
        listaAmigos.appendChild(li); // Agregar el elemento a la lista
    });
}

// Función para sortear amigo
function sortearAmigo() {
    // Verificar si hay amigos en la lista
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, añade algunos nombres.');
        return;
    }

    // Seleccionar un amigo aleatorio
    const amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el resultado en la lista de resultados
    mostrarResultado(amigoAleatorio);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores

    const li = document.createElement('li');
    li.textContent = `Tu amigo secreto es: ${amigo}`; // Mensaje con el amigo secreto
    resultado.appendChild(li); // Agregar el elemento a la lista de resultados
}
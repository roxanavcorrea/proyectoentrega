//Solucionar que el botón funcione en las otras páginas, solo funciona en el inicio
function toggleMode() {
    const body = document.body;
    const boton = document.querySelector('.boton');
    body.classList.toggle('dark-mode');
    boton.classList.toggle('boton-light'); // Cambia la clase del botón al modo claro
    console.log(modo); 
}

document.addEventListener("DOMContentLoaded", function () {
    // Función para validar la edad (convertida a función de flecha)
    const validarEdad = (edad) => {
        if (edad === null || isNaN(edad) || edad === "") {
            return false; // La edad no es válida
        } else {
            edad = parseInt(edad);
            return edad >= 18; // La persona es mayor de edad
        }
    };

    // Función para manejar la suscripción del usuario
    const manejarSuscripcion = () => {
        let edad = prompt("Ingrese su edad:");
        if (validarEdad(edad)) {
            // Almacenar datos del usuario en localStorage utilizando JSON
            const usuario = {
                nombre: prompt("Ingrese su nombre:"),
                edad: edad
            };
            localStorage.setItem('usuario', JSON.stringify(usuario));

            // Almacenar indicador de suscripción
            localStorage.setItem('usuario_suscrito', true);

            alert("¡Gracias por suscribirte!");
            // Redirigir a la página de registro si es mayor de 18 años
            window.location.href = "./html/Registrate.html";
        } else {
            alert("Lo siento, necesitas ser mayor de 18 años para suscribirte.");

            // Ocultar la opción de suscripción si es menor de 18 años
            const subscribeMessage = document.getElementById('subscribe-message');
            subscribeMessage.style.display = 'none';
        }
    };

    // Manejar la interacción del usuario al cargar la página
    const subscribeMessage = document.getElementById('subscribe-message');
    subscribeMessage.addEventListener('click', manejarSuscripcion);

    // Función para manejar la selección de opciones del usuario (convertida a función de flecha)
    const manejarOpciones = () => {
        // Usuario
        let usuario = prompt("Bienvenido! Ingrese su nombre:");
        while (usuario === "" || usuario === null) {
            usuario = prompt("Debes ingresar un nombre válido para continuar. Por favor, ingrese su nombre:");
        }
        console.log("Usuario:", usuario);
        alert("Bienvenido, " + usuario + ", a la fan page de tu cantante favorito!");

        // Edad
        let edad = prompt("Ingrese su edad:");
        console.log("Edad:", edad);

        // Validar la edad utilizando la función validarEdad
        if (!validarEdad(edad)) {
            alert("Lo siento, necesitas ser mayor de 18 años para ingresar a esta página.");
            // Detener la ejecución del script si la edad no es válida
            throw new Error("Edad no válida");
        } else if (parseInt(edad) === 18) {
            alert("¡Tenes 18 años! Bienvenido a la fan page.");
        } else {
            alert("Bienvenido a la fan page.");
        }

        // Array para almacenar las selecciones de opciones del usuario
        const seleccionesUsuario = [];

        let opcion;
        do {
            opcion = prompt(`Por favor, selecciona una opción:
            0. Inicio
            1. Música
            2. Videos
            3. Tour
            4. Registrarse`);
            opcion = parseInt(opcion);

            if (!isNaN(opcion) && opcion >= 0 && opcion <= 4) {
                seleccionesUsuario.push(opcion);
                console.log("Opción seleccionada:", opcion);

                switch (opcion) {
                    case 0:
                        alert("¡Gracias por visitarnos!");
                        break;
                    case 1:
                        alert("¡Elegiste Música! ¡Que lo disfrutes!");
                        window.location.href = "./html/Musica.html";
                        break;
                    case 2:
                        alert("¡Elegiste Videos! ¡Que lo disfrutes!");
                        window.location.href = "./html/Video.html";
                        break;
                    case 3:
                        alert("¡Elegiste Tour! ¡Que lo disfrutes!");
                        window.location.href = "./html/Tour.html";
                        break;
                    case 4:
                        alert("¡Elegiste Registrarse! Gracias por unirte.");
                        window.location.href = "./html/Registrate.html";
                        break;
                }
            } else {
                alert("Opción no válida. Por favor, selecciona una opción del 0 al 4.");
            }
        } while (isNaN(opcion) || opcion < 0 || opcion > 4);

        // Filtrar las selecciones del usuario para obtener solo las opciones mayores a 2
        const seleccionesFiltradas = seleccionesUsuario.filter(opcion => opcion > 2);
        let mensaje = ""; // Variable para almacenar el mensaje

        for (let i = 0; i < seleccionesFiltradas.length; i++) {
            mensaje += `El usuario seleccionó la opción ${seleccionesFiltradas[i]}.\n`;
        }

        if (mensaje !== "") {
            console.log(mensaje); // Imprimir el mensaje en la consola
        } else {
            console.log("El usuario no seleccionó opciones mayores a 2.");
        }
    };

    manejarOpciones(); // Llamada inicial a manejarOpciones
});
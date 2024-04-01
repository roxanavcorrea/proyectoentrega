// Función para validar la edad (convertida a función de flecha)
const validarEdad = (edad) => {
    if (edad === null || isNaN(edad) || edad === "") {
        return false; // La edad no es válida
    } else {
        edad = parseInt(edad);
        return edad >= 18; // La persona es mayor de edad
    }
};

// Método para buscar una opción específica en el array de selecciones del usuario
const buscarOpcion = (seleccionesUsuario, opcion) => {
    return seleccionesUsuario.find((elemento) => elemento === opcion);
};

// Función para manejar la selección de opciones del usuario (convertida a función de flecha)
const manejarOpciones = (validarEdadCallback) => {
    // Usuario
    let usuario = prompt("Bienvenido! Ingrese su nombre:");
    while (usuario === "" || usuario === null) {
        usuario = prompt("Debes ingresar un nombre válido para continuar. Por favor, ingrese su nombre:");
    }
    console.log("usuario");
    alert("Bienvenido, " + usuario + ", a la fan page de tu cantante favorito!");

    // Edad
    let edad = prompt("Ingrese su edad:");

    // Validar la edad utilizando la función validarEdad
    if (!validarEdadCallback(edad)) {
        alert("Lo siento, necesitas ser mayor de 18 años para ingresar a esta página.");
        // Detener la ejecución del script si la edad no es válida
        throw new Error("Edad no válida");
    } else if (parseInt(edad) === 18) {
        alert("¡Tenes 18 años! Bienvenido a la fan page.");
    } else {
        alert("Bienvenido a la fan page.");
    }
    console.log("edad");

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

    // Después de que el usuario haya realizado sus selecciones
    // Por ejemplo, si queres verificar si el usuario seleccionó la opción 1 (Música)
    const opcionBuscada = 1;
    if (buscarOpcion(seleccionesUsuario, opcionBuscada) !== undefined) {
        console.log("El usuario seleccionó la opción de Música.");
        // Aca se puede realizar alguna acción basada en la selección del usuario
    } else {
        console.log("El usuario no seleccionó la opción de Música.");
        // Aca se puede realizar otra acción si el usuario no seleccionó la opción de Música
    }
}

    // Llamada a la función principal
    manejarOpciones(validarEdad);
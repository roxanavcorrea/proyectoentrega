// Función
function validarEdad(edad) {
    if (edad === null || isNaN(edad) || edad === "") {
        return false; // La edad no es válida
    } else {
        edad = parseInt(edad);
        if (edad < 18) {
            return false; // La persona es menor de edad
        } else {
            return true; // La persona es mayor de edad
        }
    }
}

// Usuario
let usuario = prompt("Bienvenido! Ingrese su nombre:");

while (usuario === "" || usuario === null) {
    if (usuario === null) {
        alert("Debes ingresar un nombre válido para continuar.");
    } else {
        alert("¡Decinos tu nombre!");
    }
    usuario = prompt("Ingrese su nombre:");
}
console.log("usuario");
alert("Bienvenido, " + usuario + ", a la fan page de tu cantante favorito!");

// Edad
let edad = prompt("Ingrese su edad:");

if (edad === null || isNaN(edad) || edad === "") {
    alert("Debes ingresar una edad válida para continuar.");
} else {
    edad = parseInt(edad);
    if (edad < 18) {
        alert("Lo siento, necesitas ser mayor de edad para ingresar a esta página.");
    } else if (edad === 18) {
        alert("¡Tenes 18 años! Bienvenido a la fan page.");
    } else {
        alert("Bienvenido a la fan page.");
    }
}
console.log("edad");

// Opciones
let opcion;

do {
    opcion = prompt (`Por favor, selecciona una opción:
        0. Inicio
        1. Música
        2. Videos
        3. Tour
        4. Registrarse`);
    opcion = parseInt(opcion);
    console.log("opcion");

    // Se dirige la página cuando se toca la opción
    switch (opcion) {
        case 0:
            alert("Gracias por visitarnos!");
            break;
        case 1:
            alert("Elegiste Música. ¡Que lo disfrutes!");
            window.location.href = "./html/Musica.html";
            break;
        case 2:
            alert("Elegiste Videos. ¡Que lo disfrutes!");
            window.location.href = "./html/Video.html";
            break;
        case 3:
            alert("Elegiste Tour. ¡Que lo disfrutes!");
            window.location.href = "./html/Tour.html";
            break;
        case 4:
            alert("Elegiste Registrarse. Gracias por unirte.");
            window.location.href = "./html/Registrate.html";
            break;
        default:
            alert("Opción no válida.");
    }
} while (isNaN(opcion) || opcion < 0 || opcion > 4);
console.log("opcion");

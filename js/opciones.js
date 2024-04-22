document.addEventListener("DOMContentLoaded", function() {
    // Definir los servicios de música utilizando JSON
    let serviciosMusica = [
        {
            nombre: "My World",
            opciones: [
                { nombre: "My World", precio: 6500 },
                { nombre: "My World; acoustic", precio: 8000 },
            ]
        },
        {
            nombre: "Journals",
            opciones: [
                { nombre: "Journals", precio: 8500 },
            ]
        },
        {
            nombre: "Purpose",
            opciones: [
                { nombre: "Purpose", precio: 10000 },
            ]
        },
        {
            nombre: "The Mistletoe",
            opciones: [
                { nombre: "The Mistletoe", precio: 9000 },
            ]
        },
        {
            nombre: "Believe",
            opciones: [
                { nombre: "Believe", precio: 8000 },
            ]
        },
    ];

    let carrito = [];

    // Función para agregar un servicio al carrito
    const agregarAlCarrito = (servicio) => {
        carrito.push(servicio);
        // Almacenar el carrito en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
    };

    // Función para mostrar el carrito de compras
    const mostrarCarrito = () => {
        let total = 0;
        let descripcionCarrito = "Productos en su carrito:\n";

        for (let i = 0; i < carrito.length; i++) {
            descripcionCarrito += `${carrito[i].nombre} - $${carrito[i].precio}\n`;
            total += carrito[i].precio;
        }

        descripcionCarrito += `Total a pagar: $${total}. Muchas gracias por tu compra. ¡Que lo disfrutes!`;
        alert(descripcionCarrito);
    };

    // Función para elegir un servicio y agregarlo al carrito
    const elegirServicio = () => {
        let opciones = "";
        for (let i = 0; i < serviciosMusica.length; i++) {
            opciones += `${i + 1}. ${serviciosMusica[i].nombre}\n`;
        }

        let eleccion = prompt(`¿Qué álbum desea adquirir?\n${opciones}`);
        let indiceEleccion = parseInt(eleccion);

        if (!isNaN(indiceEleccion) && indiceEleccion > 0 && indiceEleccion <= serviciosMusica.length) {
            let servicioElegido = serviciosMusica[indiceEleccion - 1];

            if (servicioElegido.opciones) { 
                let subopciones = "";
                for (let i = 0; i < servicioElegido.opciones.length; i++) {
                    subopciones += `${i + 1}. ${servicioElegido.opciones[i].nombre}\n`;
                }

                let eleccionSubopcion = prompt(`¿Qué opción desea para ${servicioElegido.nombre}?\n${subopciones}`);
                let indiceSubopcion = parseInt(eleccionSubopcion);

                if (!isNaN(indiceSubopcion) && indiceSubopcion > 0 && indiceSubopcion <= servicioElegido.opciones.length) {
                    let subopcionElegida = servicioElegido.opciones[indiceSubopcion - 1];
                    agregarAlCarrito(subopcionElegida);
                } else {
                    alert("Opción inválida.");
                }
            } else {
                agregarAlCarrito(servicioElegido);
            }

            let respuesta = prompt("¿Desea comprar otro producto?\n1. Sí\n2. No");
            if (respuesta === "1") {
                elegirServicio();
            } else if (respuesta === "2") {
                mostrarCarrito();
            } else {
                alert("Opción inválida.");
            }
        } else if (eleccion === "7") {
            consultarPrecio();
        } else if (eleccion === "0") {
            salir();
        } else {
            alert("Opción inválida.");
        }
    };

    elegirServicio();
});
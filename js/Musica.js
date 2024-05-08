document.addEventListener("DOMContentLoaded", function () {
    console.log("El DOM ha sido cargado correctamente.");

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contenedorProductos = document.querySelector("#albumcompleto");
    const carritoVacio = document.querySelector("#carrito-vacio");
    const carritoProductos = document.querySelector("#carrito-productos");
    const carritoTotal = document.querySelector("#carrito-total");

    fetch("/data/productos.json") 
        .then(res => res.json())
        .then(data => mostrarProductos(data));

    
    const mostrarProductos = (productos) => {
        productos.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("producto"); 
            div.innerHTML = `
                <img class="albumcompleto" src="${producto.img}" alt="${producto.titulo}">
                <h3>${producto.titulo}</h3>
                <p>$${producto.precio}</p>
            `;

            const btn = document.createElement("button");
            btn.classList.add("boton");
            btn.innerText = "Agregar Al Carrito";

            btn.addEventListener("click", () => {
                agregarAlCarrito(producto);
            })

            div.append(btn);
            contenedorProductos.append(div);
        });
    }

    function actualizarCarrito() {
        if (carrito.length === 0) {
            carritoVacio.classList.remove("d-none");
            carritoProductos.classList.add("d-none");
        } else {
            carritoVacio.classList.add("d-none");
            carritoProductos.classList.remove("d-none");

            carritoProductos.innerHTML = "";
            carrito.forEach(producto => {
                const div = document.createElement("div");
                div.classList.add("carrito-producto");
                div.innerHTML = `
            <img class="albumcompleto" src="${producto.img}">
            <h3>${producto.titulo}</h3>
            <p>$${producto.precio}</p>
            <p>Cant: ${producto.cantidad}</p>
            <p>Subt: $${producto.cantidad * producto.precio}</p>
            `;

                const btn = document.createElement("button");
                btn.classList.add("carrito-producto-btn");
                btn.innerText = "❌​​"
                btn.addEventListener("click", () => {
                    borrarDelCarrito(producto);
                })
                div.append(btn);

                carritoProductos.append(div);
            })
        }
        actualizarTotal();

    }

    const agregarAlCarrito = (producto) => {
        console.log("Agregando producto al carrito:", producto);
        const itemEncontrado = carrito.find(item => item.titulo === producto.titulo);
        if (itemEncontrado) {
            itemEncontrado.cantidad++;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }

        actualizarCarrito();
    }

    const borrarDelCarrito = (producto) => {
        console.log("Borrando producto del carrito:", producto);
        const prodIndex = carrito.findIndex(item => item.titulo === producto.titulo);
        carrito.splice(prodIndex, 1);
        actualizarCarrito();
    }

    const actualizarTotal = () => {
        console.log("Actualizando total del carrito...");
        const total = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
        carritoTotal.innerText = `$${total}`;
    }
});
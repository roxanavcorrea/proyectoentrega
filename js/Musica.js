let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const productos = [
    {
        titulo: "My World",
        precio: 6500,
        img: "../img/1200x1200bf-60.jpg",
    },
    {
        titulo: "Journals",
        precio: 8500,
        img: "../img/6691017_orig.png",
    },
    {
        titulo: "My World Acoustic",
        precio: 8000,
        img: "../img/justin bieber my world unplugged.jpg",
    },
    {
        titulo: "Purpose",
        precio: 10000,
        img: "../img/justin_bieber_purpose_vinyl_front_cover_f3c094ef-dd75-4351-89c0-2ac74f8e64ea_1024x1024.webp",
    },
    {
        titulo: "The Mistletoe",
        precio: 9000,
        img: "../img/under-the-mistletoe-photo-1.jpg",
    },
    {
        titulo: "Believe",
        precio: 8000,
        img: "../img/justinb_believe_coverar_3000dpi300rgb1000181196_1.jpg",
    }

];

const contenedorProductos = document.querySelector("#albumcompleto");
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoTotal = document.querySelector("#carrito-total");

productos.forEach((producto) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <img class="albumcompleto" src="${producto.img}" alt="${producto.titulo}">
        <h3>${producto.titulo}</h3>
        <p>$${producto.precio}<//p>
    `;

    const btn = document.createElement("button");
    btn.classList.add("boton");
    btn.innerText = "Agregar Al Carrito";

    btn.addEventListener("click", () => {
        agregarAlCarrito(producto);
    })

    div.append(btn);
    contenedorProductos.append(div);
})

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
    const itemEncontrado = carrito.find(item => item.titulo === producto.titulo);
    if (itemEncontrado) {
        itemEncontrado.cantidad++;
    } else {
        carrito.push({...producto, cantidad: 1 });
    }

    actualizarCarrito();
}

const borrarDelCarrito = (producto) => {
    const prodIndex = carrito.findIndex(item => item.titulo === producto.titulo);
    carrito.splice(prodIndex, 1);
    actualizarCarrito();
}

const actualizarTotal = () => {
    const total = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
    carritoTotal.innerText = `$${total}`;
}
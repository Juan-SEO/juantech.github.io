document.addEventListener('DOMContentLoaded', function () {
    const carrito = document.querySelector('.carrito');
    const contadorCarrito = document.querySelector('.contador-carrito');
    const btnsAnadirCarrito = document.querySelectorAll('.btn-anadir-carrito');
    const botonesAnadirCarrito = document.querySelectorAll('.btn-anadir-carrito');

    let carritoCount = parseInt(localStorage.getItem('carritoCount')) || 0;
    actualizarContadorCarrito(); 

    btnsAnadirCarrito.forEach(function (btn) {
        btn.addEventListener('click', function () {
            carritoCount++;
            actualizarContadorCarrito();

            var producto = this.getAttribute('data-producto');
            alert('Producto añadido al carrito: ' + producto);

            
            let productosSeleccionados = JSON.parse(localStorage.getItem('productosSeleccionados')) || [];
            productosSeleccionados.push(producto);
            localStorage.setItem('productosSeleccionados', JSON.stringify(productosSeleccionados));
        });
    });

    function actualizarContadorCarrito() {
        contadorCarrito.textContent = carritoCount;
        localStorage.setItem('carritoCount', carritoCount);
    }



carrito.addEventListener('click', function () {
        window.location.href = 'carrito.html';
    });
});



document.addEventListener('DOMContentLoaded', function () {
    mostrarProductosSeleccionados();
});

function mostrarProductosSeleccionados() {
    const listaProductos = JSON.parse(localStorage.getItem('productosSeleccionados')) || [];

    const listaProductosDiv = document.getElementById('lista-productos');

    if (listaProductos.length === 0) {
        listaProductosDiv.innerHTML = '<p>No hay productos en el carrito.</p>';
    } else {
        listaProductosDiv.innerHTML = '<ul>';
        listaProductos.forEach(function (producto) {
            listaProductosDiv.innerHTML += '<li>' + producto + '</li>';
        });
        listaProductosDiv.innerHTML += '</ul>';
    }
}


function comprarAhora() {

    window.location.href = "gracias.html";
}

// VACIAR CARRITO DE COMPRA

function vaciarCarrito() {
    localStorage.removeItem('productosSeleccionados');
    actualizarListaProductos(); 
}

// AACTUALIZARR PRODUCTOS

function actualizarListaProductos() {
    const listaProductosDiv = document.getElementById('lista-productos');
    listaProductosDiv.innerHTML = '<p>No hay productos en el carrito.</p>';
}
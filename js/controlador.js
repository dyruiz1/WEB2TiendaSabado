//importando los modulos que se crearon en llenado tienda
import {pintarTienda} from "./llenadotienda.js";
// retos
// 1. que no se puedan ingresar numeros negativos
// 2. que cuando se cambie de producto vuelva a 1 por defecto
// 3. una sola variable para el modal y que oculte la ventana cuando merque modalinfoproducto.()

const modalInfoProducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))

// codigo que maneja el cambio de simbolo de la moneda
let currencySymbol = "$"
let currencySelect = document.getElementById("currencySelect")
currencySelect.addEventListener('change',function(event){
    currencySymbol = event.target.value
    // Cada vez que el simbolo de la moneda cambia, debemos actualizar toda la pagina, para poder ver el cambio
    pintarTienda(modalInfoProducto, getPrecioConvertido)
})

function getPrecioConvertido(precio) {
    if (currencySymbol === '$') {
        return currencySymbol + " " + precio
    } else if (currencySymbol === 'USD') {
        return currencySymbol + " " + Math.round(precio / 3931)
    } else if (currencySymbol === '€') {
        return currencySymbol + " " + Math.round(precio / 4193)
    }
    return currencySymbol + " " + precio
}


//crear un objeto vacio
let producto={}

//Llamando al modulo de pintar
pintarTienda(modalInfoProducto, getPrecioConvertido)

//carrito es un arreglo de productos (arreglo de objetos)
let carrito=[]

let boton = document.getElementById("botonAdd")
boton.addEventListener('click',function(event){
    // console.log("estoy añadiendo al carrito")
    const producto = JSON.parse(document.getElementById('modalinfoproducto').dataset.producto)

    //1. capturar la cantidad del producto
    let cantidad=document.getElementById("cantidadProducto").value
    //2. agrego la cantidad al objeto Producto
    producto.cantidad=cantidad

    // Paso intermedio: Si el producto ya existe en el carrito, entonces no se agrega un nuevo item sino que se actualiza el que ya existe.
    // Se busca la POSICION del producto si es que existe en el carrito de compras... una vez validemos que la posicion es cero o mayor a cero, es decir > -1
    // Actualizamos la cantidad de el carrito en ESA POSICION y solo en esa... la cantidad que tenia, mas la nueva cantidad.
    let existeProducto = carrito.findIndex(function(p) { return p.id == producto.id })
    if (existeProducto > -1) {
        carrito[existeProducto].cantidad = parseInt(carrito[existeProducto].cantidad) + parseInt(cantidad)
    } else {
        //3. agregar el producto al carrito, llenamos el carrito
        carrito.push(producto)
    }

    //4. calculo la sumatoria de cantidades
    let suma=0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
    })
    
    let pildora=document.getElementById("pildora")
        pildora.textContent=suma
        pildora.classList.remove("invisible")

    modalInfoProducto.hide()
})

let limpiarcarro = document.getElementById("botolimpiar")
limpiarcarro.addEventListener("click", function(event){
    carrito=[]
    let pildora = document.getElementById("pildora")
    pildora.textContent=0
    pildora.classList.add("invisible")
})

// Codigo para cerrar la ventana modal desde el boton X arriba y desde el boton cerrar abajo.
const botonCerrarModal=document.querySelectorAll(".cerrarmodal")
botonCerrarModal.forEach(function(element){
    element.addEventListener('click', function(event){
        modalInfoProducto.hide()
        document.getElementById('modalinfoproducto').dataset.producto = JSON.stringify({})
    })
});

// 5. ver resumen de venta
// debemos revisar que evento debo escuchar para desplegar la rutina, debemos buscar nboton
// .value solo para capturar informacion de una caja, casi siempre de un formulario, sirve para ver, para sacar informacion

let botonCarrito = document.getElementById("botonCarrito")
botonCarrito.addEventListener("click",function(event){
    
    let contenedor = document.getElementById("contenedorVenta")

    const modalVenta = new bootstrap.Modal(document.getElementById('resumenCarrito'))
    // borrar el contenido HTML de una seccion para que no pinte sobre lo anterior

    contenedor.innerHTML = ""

    let TOTAL = 0

    // recorre el carrito para pintar los productos en la prefactura,siempre dentro una función anonima
    carrito.forEach(function(producto){

        console.log(producto)

        let fila1 = document.createElement("div")
        fila1.classList.add("row", "filaFoto")

        let fila2 = document.createElement("div")
        fila2.classList.add("row")

        let foto = document.createElement("img")
        foto.classList.add("fotoProducto")
        foto.src=producto.foto

        let nombre = document.createElement("h5")
        nombre.textContent = "Nombre del producto: " + producto.nombre
        nombre.classList.add("text-center")

        let precio = document.createElement("h5")
        precio.textContent = "Valor unitario: " + getPrecioConvertido(producto.precio)
        precio.classList.add("text-center")

        let cantidad = document.createElement("h5")
        cantidad.textContent = "Cantidad: " + producto.cantidad
        cantidad.classList.add("text-center")

        let subtotal = document.createElement("h5")
        let subtotalValor = producto.cantidad * producto.precio
        subtotal.textContent = "sub total: " + getPrecioConvertido(subtotalValor)
        subtotal.classList.add("text-center")

        TOTAL = TOTAL + subtotalValor
        
        

        // padres e hijas
        fila1.appendChild(foto)
        contenedor.appendChild(fila1)
        
        fila2.appendChild(nombre)
        fila2.appendChild(precio)
        fila2.appendChild(cantidad)
        fila2.appendChild(subtotal)
        contenedor.appendChild(fila2)

    })
    modalVenta.show()

    let total = document.createElement("h3")
    total.classList.add('totalCarrito', "badge", "bg-primary", "text-wrap")
    total.innerHTML = "El total de su carrito es: " + getPrecioConvertido(TOTAL)
    contenedor.appendChild(total)
})

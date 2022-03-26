//importando los modulos que se crearon en llenado tienda

import {pintarTienda} from "./llenadotienda.js";
import {ampliarInformacion} from "./ampliarinfo.js";

let producto={}

// llamando modulo pintar
pintarTienda();

// llamando modulo de ampliar información
let contenedorTienda = document.getElementById("contenedor-productos")
contenedorTienda.addEventListener("click", function(event){
      
    producto=ampliarInformacion(event)
 
    
})

// detectar accion de añadir al carrito

// vamos a crear el arreglo de productos(objetos) debe ser antes ya que si no el carrito se limpia siempre que agregue algo

let carrito = []

let boton = document.getElementById("botonAdd")
    boton.addEventListener("click", function(event){
  
    // 1. capturar la cantidad de producto
    let cantidad = document.getElementById("cantidadProducto").value
    
    // 2. agrego la cantidad al objeto producto
    producto.cantidad = cantidad

    // 3.agregar otro elemento a la caja
    carrito.push(producto)

    // 4.calculo de la sumatoria de cantidades
    let suma = 0
    carrito.forEach(function(producto){
        suma = suma + Number (producto.cantidad)
        
    })
    let pildora=document.getElementById("pildora")
    pildora.textContent=suma
    pildora.classList.remove("invisible")

})


let limpiarcarro = document.getElementById("botolimpiar")
    limpiarcarro.addEventListener("click", function(event){
    carrito=[]
    let pildora = document.getElementById("pildora")
    pildora.textContent=0
    pildora.classList.add("invisible")

})
// alla un valor por defecto en el input





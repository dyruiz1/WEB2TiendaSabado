import {ampliarInformacion} from "./ampliarinfo.js";

// arreglo de objetos
export function pintarTienda(modalInfoProducto, getPrecioConvertido){

  let productosBD = [
    {id: 1, nombre:"Calcetines", precio: 45000,foto:"img/calcetines.jpg", descripcion:"Tus pies lucirán mejor que nunca con tus nakamas preferidos!", tamaño: "Tamaño:Talla Única (Se adaptan con una increíble facilidad a cualquier tipo de pie debido a su calidad)", stock:"Disponible."},
    {id: 2, nombre:"Figura Luffy", precio: 35000,foto:"img/figuraluffy.jpg", descripcion:"¡Decora tu habitación con estas fabulosas figuras de Sombrero de Paja", tamaño: "Tamaño: 15cm", stock:"Disponible."},
    {id: 3, nombre:"Figura Namy", precio: 60000,foto:"img/figuranamy.jpg", descripcion:"increíbles Figuras del la mejor navegante de One Piece.", tamaño: "Tamaño: 15cm", stock:"Disponible."},
    {id: 4, nombre:"Figura zoro", precio: 70000,foto:"img/figurazoro.jpg", descripcion:"¡Decora tu casa con estas increíbles figuras de Zoro!", tamaño: "Tamaño: 15cm", stock:"Disponible."},
    {id: 5, nombre:"Fruta akuma", precio: 30000,foto:"img/frutaakuma.jpg", descripcion:"¡Regala una Fruta del diablo de One Piece!¿Cuál eliges?", tamaño: "Tamaño: 15cm", stock:"Disponible."},
    {id: 6, nombre:"Funkos", precio: 85000,foto:"img/funko.jpg", descripcion:"Surca el mar y coleccionalos a todos", tamaño: "Tamaño:12cm", stock:"Disponible."},
    {id: 7, nombre:"Llavero Luffy", precio: 65000,foto:"img/llaveroLuffy.jpg", descripcion:"Cambia ese aburrido llavero por uno de tu serie favorita.", tamaño: "Tamaño: 9.5", stock:"Disponible."},
    {id: 8, nombre:"Denden Mushi", precio: 7.000,foto:"img/denden.jpg", descripcion:"¿Cansado de tu iphone? ¡Regala un Den Den Mushi!.", tamaño: "Tamaño: 30cm", stock:"Disponible."},
    {id: 9, nombre:"Termos", precio: 30000,foto:"img/termo.jpg", descripcion:"No te quedes con la boca seca en ningún momento, y asegúrate de tener cerca tus botellas de One Piece… ¿Cuál eliges?", tamaño: "Tamaño: 250ml", stock:"Disponible."},
    {id: 10, nombre:"Gorros", precio: 35000,foto:"img/sombrero.jpg", descripcion:"¿Te imaginas llevar el sombrero de paja que Shanks le regaló de Luffy?", tamaño: "Tamaño: 13.58 x 9.61 x 2.4 pulgadas", stock:"Disponible."},
    {id: 11, nombre:"Posters", precio: 27000,foto:"img/posters.jpg", descripcion:"Los carteles con las mayores recompensas de tus nakamas y las batallas más épicas.", tamaño: "Tamaño: 27 x 39 pulgadas", stock:"Disponible."},
    {id: 12, nombre:"Pulseras", precio: 30000,foto:"img/pulseras.jpg", descripcion:"Ya puedes adornar tus brazos con estas bonitas pulseras de tu serie favorita.", tamaño: 'Tamaño: Diámetro:20"', stock:"Disponible."},
  ]
  // recorriendo un arreglo con JS, es decir buscar, seleccionar, esculcar
  // for each entra al arreglo, lo cuenta y repite la accion segun el numero de elementos

  // crear una referncia para traer el componente padre, TRAVERSI
  let contenedorProductos = document.getElementById("contenedor-productos")
  contenedorProductos.innerHTML = "";

  productosBD.forEach(function(producto){
    // console.log(producto)

    //crear columna
    let columna = document.createElement("div")
    columna.classList.add("caja-producto")

    //  crear la tarjeta
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-80")
    tarjeta.style = 'width: 18rem;'

    // creo la imagen
    let imagen = document.createElement("img")
    imagen.classList.add("producto-imagen")
    imagen.src = producto.foto

    // se crea el cuerpo de la tarjeta
    let divisor = document.createElement("hr")
    let cuerpoTarjeta = document.createElement("div")
    cuerpoTarjeta.classList.add("card-body")

    // se crea el titulo de la tarjeta con el nombre del producto
    let nombreProducto = document.createElement("h5")
    nombreProducto.classList.add("card-title")
    nombreProducto.classList.add("text-muted")
    nombreProducto.textContent = producto.nombre

    // se pone el precio al producto
    let precioProducto = document.createElement("p")
    precioProducto.classList.add("card-text")
    precioProducto.textContent = getPrecioConvertido(producto.precio)

    // se pone el precio al producto
    let descripcionProducto = document.createElement("h6")
    descripcionProducto.classList.add("card-text")
    descripcionProducto.textContent = producto.descripcion   

    // se crea el boton
    let botonInfoProducto=document.createElement("button")
    botonInfoProducto.setAttribute("type","button")
    botonInfoProducto.classList.add("btn")
    botonInfoProducto.classList.add("btn-warning")
    botonInfoProducto.classList.add("w-100")
    botonInfoProducto.classList.add("shadow")
    botonInfoProducto.textContent="ver producto"

    // Event Listener para abrir la ventana modal con la informacion de un SOLO producto
    botonInfoProducto.addEventListener("click", function(){
      ampliarInformacion(producto)
      modalInfoProducto.show();
      // Guardar la informacion del producto en la ventana modal, para despues usarla cuando le dan click al boton agregar al carrito
      document.getElementById('modalinfoproducto').dataset.producto = JSON.stringify(producto)
    })

    // para el tamaño
    let tamañoproducto = document.createElement("h7")
    tamañoproducto.classList.add("card-text")
    tamañoproducto.textContent = producto.tamaño 

    // para la disponibilidad
    let stockProducto = document.createElement("h4")
    stockProducto.classList.add("card-text")
    stockProducto.textContent = producto.stock 

    // crear el boton para ampliar información
  
    //PADRES E HIJOS
    // 2. ordernar la estructura
    // padres e hijos
    // fotos es hijo de tarjeta, la targeta es hija de columna

    cuerpoTarjeta.appendChild(nombreProducto)
    cuerpoTarjeta.appendChild(descripcionProducto)
    cuerpoTarjeta.appendChild(precioProducto)
    cuerpoTarjeta.appendChild(botonInfoProducto)
    cuerpoTarjeta.appendChild(tamañoproducto)
    cuerpoTarjeta.appendChild(stockProducto)
   
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(divisor)
    tarjeta.appendChild(cuerpoTarjeta)
    columna.appendChild(tarjeta)
    contenedorProductos.appendChild(columna)
  })
}

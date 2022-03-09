// arreglo de objetos
let productosBD = [
    {nombre:"Calcetines", precio: 450000,foto:"img/calcetines.jpg", descripcion:"Tus pies lucirán mejor que nunca con tus nakamas preferidos!"},
    {nombre:"Figura Luffy", precio: 350000,foto:"img/figuraluffy.jpg", descripcion:"¡Decora tu habitación con estas fabulosas figuras de Sombrero de Paja!"},
    {nombre:"Figura Namy", precio: 60000,foto:"img/figuranamy.jpg", descripcion:"increíbles Figuras del la mejor navegante de One Piece."},
    {nombre:"Figura zoro", precio: 70000,foto:"img/figurazoro.jpg", descripcion:"¡Decora tu casa con estas increíbles figuras de Zoro!"},
    {nombre:"Fruta akuma", precio: 300000,foto:"img/frutaakuma.jpg", descripcion:"¡Regala una Fruta del diablo de One Piece!¿Cuál eliges?"},
    {nombre:"Funkos", precio: 850000,foto:"img/funko.jpg", descripcion:"Surca el mar y coleccionalos a todos"},
    {nombre:"Llavero Luffy", precio: 650000,foto:"img/llaveroLuffy.jpg", descripcion:"Cambia ese aburrido llavero por uno de tu serie favorita."},
    {nombre:"Denden Mushi", precio: 750000,foto:"img/denden.jpg", descripcion:"¿Cansado de tu iphone? ¡Regala un Den Den Mushi!."},
    {nombre:"Termos", precio: 350000,foto:"img/termo.jpg", descripcion:"No te quedes con la boca seca en ningún momento, y asegúrate de tener cerca tus botellas de One Piece… ¿Cuál eliges?"},
    {nombre:"Gorros", precio: 350000,foto:"img/sombrero.jpg", descripcion:"¿Te imaginas llevar el sombrero de paja que Shanks le regaló de Luffy?"},
    {nombre:"Posters", precio: 27000,foto:"img/posters.jpg", descripcion:"Los carteles con las mayores recompensas de tus nakamas y las batallas más épicas."},
    {nombre:"Pulseras", precio: 30000,foto:"img/pulseras.jpg", descripcion:"Ya puedes adornar tus brazos con estas bonitas pulseras de tu serie favorita."},
]
// recorriendo un arreglo con JS, es decir buscar, seleccionar, esculcar
// for each entra al arreglo, lo cuenta y repite la accion segun el numero de elementos

// crear una referncia para traer el componente padre
let contenedorProductos = document.getElementById("contenedor-productos")

productosBD.forEach(function(producto){
    console.log(producto)

    //crear columna
    let columna = document.createElement("div")
    columna.classList.add("caja-producto")

    //  crear la tarjeta
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")
    tarjeta.style = 'width: 18rem;'

    // creo la imagen
    let imagen = document.createElement("img")
    imagen.classList.add("producto-imagen")
    imagen.src = producto.foto

    // se crea el cuerpo de la tarjeta
    let divisor = document.createElement("hr")
    let cuerpoTarjeta = document.createElement("div")
    cuerpoTarjeta.classList.add("card-body")

    // se crea el titulo de la tarjeta con el no,nre del producto
    let nombreProducto = document.createElement("h5")
    nombreProducto.classList.add("card-title")
    nombreProducto.classList.add("text-muted")
    nombreProducto.textContent = producto.nombre

    // se pone el precio al producto
    let precioProducto = document.createElement("p")
    precioProducto.classList.add("card-text")
    precioProducto.textContent = "$" + producto.precio

      // se pone el precio al producto
      let descripcionProducto = document.createElement("p")
      descripcionProducto.classList.add("card-text")
      descripcionProducto.textContent = producto.descripcion

    // se pone la informacion del producto
    let botonInfoProducto=document.createElement("button")
    botonInfoProducto.setAttribute("type","button")
    botonInfoProducto.classList.add("btn")
    botonInfoProducto.classList.add("btn-primary")
    botonInfoProducto.classList.add("w-100")
    botonInfoProducto.classList.add("shadow")
    botonInfoProducto.textContent="ver producto"


    //PADRES E HIJOS
    // 2. ordernar la estructura
    // padres e hijos
    // fotos es hija de tarjeta, la tageta es hija de columna

    cuerpoTarjeta.appendChild(nombreProducto)
    cuerpoTarjeta.appendChild(descripcionProducto)
    cuerpoTarjeta.appendChild(precioProducto)
    cuerpoTarjeta.appendChild(botonInfoProducto)
   

    tarjeta.appendChild(imagen)
    tarjeta.appendChild(divisor)
    tarjeta.appendChild(cuerpoTarjeta)
    columna.appendChild(tarjeta)
    contenedorProductos.appendChild(columna)

    


})




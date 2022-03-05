// arreglo de objetos
let productosBD = [
    {nombre:"calcetines", precio: 450000,foto:"../img/calcetines.jpg", descripcion:"Tus pies lucirán mejor que nunca con tus nakamas preferidos!"},
    {nombre:"figuraluffy", precio: 350000,foto:"../img/figuraluffy.jpg", descripcion:"¡Decora tu habitación con estas fabulosas figuras de Sombrero de Paja!"},
    {nombre:"fiuranamy", precio: 60000,foto:"../img/figuranamy.jpg", descripcion:"increíbles Figuras del la mejor navegante de One Piece."},
    {nombre:"figurazoro", precio: 70000,foto:"../img/figurazoro.jpg", descripcion:"¡Decora tu casa con estas increíbles figuras de Zoro!"},
    {nombre:"fruta_akuma", precio: 300000,foto:"../img/frutaakuma.jpg", descripcion:"¡Regala una Fruta del diablo de One Piece!¿Cuál eliges?"},
    {nombre:"funko", precio: 850000,foto:"../img/funko.jpg", descripcion:"Surca el mar y coleccionalos a todos"},
    {nombre:"llaveroLuffy", precio: 650000,foto:"../img/llaveroLuffy.jpg", descripcion:"Cambia ese aburrido llavero por uno de tu serie favorita."},
    {nombre:"Mochila", precio: 750000,foto:"../img/Mochila.jpg", descripcion:"Vuelve al cole con la mochila de tus piratas favoritos."},
    {nombre:"termo", precio: 350000,foto:"../img/termo.jpg", descripcion:"No te quedes con la boca seca en ningún momento, y asegúrate de tener cerca tus botellas de One Piece… ¿Cuál eliges?"},
    {nombre:"termo", precio: 350000,foto:"../img/sombrero.jpg", descripcion:"No te quedes con la boca seca en ningún momento, y asegúrate de tener cerca tus botellas de One Piece… ¿Cuál eliges?"},
]
// recorriendo un arreglo con JS, es decir buscar, seleccionar, esculcar
// for each entra al arreglo, lo cuenta y repite la accion segun el numero de elementos

// crear una referncia para traer el componente padre
let fila = document.getElementById("fila")

productosBD.forEach(function(producto){
    console.log(producto)

    //crear columna
    let columna = document.createElement("div")
    columna.classList.add("col")

    //  crear la tarjeta
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    // creo la imagen
    let imagen = document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.src = producto.imagen

    // 2. ordernar la estructura
    // padres e hijos
    // fotos es hija de tarjeta, la tageta es hija de columna

    tarjeta.appendChild(imagen)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})




//importando los modulos que se crearon en llenado tienda

import {pintarTienda} from "./llenadotienda.js";
import {ampliarInformacion} from "./ampliarinfo.js";


// llamando modulo pintar
pintarTienda();

// llamando modulo de ampliar información
let contenedorTienda = document.getElementById("contenedor-productos")
contenedorTienda.addEventListener("click", function(event){
    
    
    ampliarInformacion(event)
    
})


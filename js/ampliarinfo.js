export function ampliarInformacion(event){
    let producto = {}
    if(event.target.classList.contains("btn")){
        let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
        modalinfoproducto.show()
        producto = {
            foto:event.target.parentElement.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h5").textContent,
        }
        console.log(producto)

        let foto = document.getElementById("fotoinfo")
        foto.src=producto.foto
        let nombre = document.getElementById("nombreinfo")
        nombre.textContent=producto.nombre
    }
}




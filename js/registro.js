// innerhtml es para mostrar que texto tiene por dentro
// textcontent, se usa cuando ya tengo la etiqueta para no tener que ponerla dentro de js, solo le falta crear el texto

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let botonregistro=document.getElementById("botonRegistro")
let modalInformativo=new bootstrap.Modal(document.getElementById('modalinformativo'))

botonregistro.addEventListener("click",function(evento){

    evento.preventDefault()
   
    let correo =document.getElementById("correo").value
    let password=document.getElementById("contraseña").value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, correo, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user)
        // ...
        let textoinformativo=document.getElementById("informaciongeneral")
        let formulario=document.getElementById("formularioregistro")
        formulario.reset()
        textoinformativo.textContent="El registro ha sido exitoso"
        modalInformativo.show()
        setTimeout(function(){
            modalInformativo.hide()
        },5000)
       
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        let textoinformativo=document.getElementById("informaciongeneral")
        textoinformativo.textContent="Falla: "+errorMessage
        modalInformativo.show()
        
    });
    

})
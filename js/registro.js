import {getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"


let botonRegistro = document.getElementById("botonRegistro")
botonRegistro.addEventListener("click", function(event){
// para que el formulario quede con los datos para botones de tipo submit
    event.preventDefault()

    let inputCorreo = document.getElementById("correo")
    let inputContrasena = document.getElementById("contraseña")
   
    let correo = inputCorreo.value
    let contraseña = inputContrasena.value
    console.log(correo, contraseña)

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, correo, contraseña)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log("exito en el registro")
        inputCorreo.value = ""
        inputContrasena.value = ""
        alert("Se ha registrado exitosamente")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log("upps se produjo una falla")
    });
})
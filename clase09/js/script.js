let boton = document.getElementById("btnPrincipal")
boton.addEventListener("click", (parametro) => {
    console.log(parametro)
})

// boton.addEventListener("click", decirHolaChicos)




function decirHolaChicos(parametro) {
    console.log(parametro)
}

// let decirAlgo = "HOLA CHICOS DESDE UN PARAMETRO"

// decirHolaChicos(decirAlgo)






// boton.addEventListener("mousedown", respuestaClickDown)
// boton.addEventListener("mouseup", respuestaClickUp)

// function respuestaClickUp() {
//     console.log("MOUSE UP");
// }


// // boton.addEventListener("mousemove", respuestaMove)

// let movimiento = 0;

// let cuadradoRojo = document.getElementById("cuadradoRojo")
// // cuadradoRojo.addEventListener("mousemove", respuestaMove)


// //CODIGO JS
// let input1 = document.getElementById("nombre")
// let input2 = document.getElementById("edad")
// input1.onkeyup = () => {console.log("keyUp")}
// input2.onkeydown = () => {console.log("keyDown")}


// //CODIGO JS FORMULARIO
// let miFormulario      = document.getElementById("formulario");
// miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(event){
//     event.preventDefault();
//     let nombreForm = document.getElementById("nombreForm")
//     console.log(event)
//     console.log(event.srcElement[0].value);     
// }



// function respuestaClick(event) {
//     console.log(event)
//     console.log("MOUSE CLICK");
// }
// let stop = false
// boton.addEventListener("mouseup", () => {
//     stop = true
// })

// function respuestaClickDown() {
//     for (let index = 0; index < 10000; index++) {
//         console.log(index)
//         if (stop) {
//             break
//         }
//     }
// }

// function respuestaMove() {
//     movimiento++
//     console.log(movimiento);
// }

//CODIGO HTML DE REFERENCIA
//CODIGO JS
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    console.log(e)
    //Obtenemos el elemento desde el cual se disparó el evento
    let formulario = e.target
    //Obtengo el valor del primero hijo <input type="text">
    console.log(formulario.children[0].value);
    //Obtengo el valor del segundo hijo <input type="number"> 
    console.log(formulario.children[1].value);
}
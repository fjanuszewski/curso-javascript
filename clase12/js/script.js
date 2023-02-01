//OPERADOR ++

let numero = 10
numero++
let titulo = document.getElementById("titulo")

let temperatura = 31

function mostrarDiaCaluroso() {
    alert("Día agradable")
}
//                  ESTO SERIA EL TRUE      ESTO SERIA EL FALSE
temperatura > 30 ? console.log("Día caluroso!") : console.log("Día agradable")
let edad = 15

const usuario = {
    nombre: "John Doe",
    edad: edad || "EDAD INVALIDA",
    // permiso: (document.getElementById("edad").value >= 18) ? true : false,
}

// let permiso = false
// if (usuario.edad >= 18) {
//     permiso = true
// } else {
//     permiso = false
// }
// if (permiso) {
//     console.log("Puede comprar cerveza")
// } else {
//     console.log("No puede comprar")
// }


// declaramos y asignamos condicionalmente
const permiso = (usuario.edad >= 18) ? true : false
console.log(permiso)
// mostramos el mensaje
permiso ? console.log("Puede comprar cerveza") : console.log("No puede comprar")

const usuario2 = {
    nombre: "John Doe",
    edad: 14
}


const registroIngreso = usuario2.edad >= 18 && new Date()

console.log(registroIngreso) // FALSE



let canal = 0
// canal = validarCanal(canal, 24)


// const tv = {
//     nombre: "John Doe",
//     canal: canal
// }

// function validarCanal(canal, valorPorDefecto) {
//     if (canal != undefined && canal > 0 && canal != NaN) {
//         return canal
//     } else {
//         return valorPorDefecto
//     }
// }

const tv = {
    nombre: "John Doe",
    canal: canal || 24,
    marca: "SAMSUNG",
    color: "negro",
    funciones:["wifi", "bt", "android"],
    accesorios: {
        cable: true,
        antena: true,
        vision3d: false
    }
}
const usuario1 = {
    nombre: "John Doe",
    edad: 14
}
const usuario3 = null

console.log(((usuario.edad >= 18) ? true : false) || (usuario.edad >= 10) ? "TENGO MAS DE 10" : false)
// { nombre: 'John Doe', edad: 14 }

console.log(usuario3 || "El usuario no existe")
// El usuario no existe

const usuario4 = null

console.log( usuario4?.nombre || "El usuario no existe" )
// Error: "No se pueden leer propiedades de NULL"

console.log( usuario4?.nombre || "El usuario no existe")
// "El usuario no existe"
let { nombre, color, funciones: cosas, accesorios:{vision3d} } = tv
let {cable, antena} = tv.accesorios
console.log(cosas)
// let nuevoNombre = tv.nombre
// let marca = tv.marca
// let color = tv.color
// let cosas = tv.funciones

console.log(vision3d)

//DESESTRUCTURACION CON OBJETOS

const producto = {
    id: 10,
    nombre: "Curso Javascript",
    precio: 12500
}

// const desestructurar = (item) => {
//     // desestructurando dentro del bloque
//     const id = item.id
//     const nombre = item.nombre
//     console.log(id, nombre)
// }

// desestructurar(producto) // 10 Curso Javascript

// desestructurando lo que reciba por parámetro
const desestructurar = ( {id, nombre} ) => {
    console.log(id, nombre)
}

desestructurar(producto) // 10 Curso Javascript

let tituloDelHTML = document.getElementById("titulo")
tituloDelHTML.addEventListener("click", ({pointerType})=>{
    console.log(pointerType)
})
//SPREAD
const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

// spread ... del array
console.log(...nombres) // Juan Julieta Carlos Mariela

// equivalente a:
console.log("Juan", "Julieta", "Carlo", "Mariela")

//spread de objetos

let usuario5 = {
    nombre: "Juan",
    edad: 24,
    curso: "Javascript"
}

usuario5 = {
    ...usuario5,
    email:"fabian.januszewski@gmail.com"
}


// // lista todas las propiedades y valores de usuario1 dentro de otro objeto
// const usuario6 = {
//     ...usuario1
// }

// console.log(usuario2) // { nombre: 'Juan', edad: 24, curso: 'Javascript' }

// const usuario7 = {
//     ...usuario5,
//     curso: "ReactJS",
//     email: "juan@doe.com"
// }

// console.log(usuario7)
// // { nombre: 'Juan', edad: 24, curso: 'ReactJS', email: 'juan@doe.com' }

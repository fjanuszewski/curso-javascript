let test = confirm("HOLA")
console.log(test)
let cantidad_facturas = Number(prompt("ingrese cantidad de Facturas")) //PIDO LA CANTIDAD PARA EL CICLO DE FOR

// let cantidad_facturas = 2
let total = 0
let promedio = 0
let numero_factura = 0
const SALIR = "ESC"
for (let factura = 1; factura <= cantidad_facturas; factura++) {
    let nombre = prompt("ingrese nombre de factura o ESC para salir")
    if (escondicionSalida(nombre)) {
        alert("GRACIAS POR SU SERVICIO")
        break
    }
    numero_factura = factura
    // let nombre = "LOQUESEA"+factura
    let monto = Number(prompt("ingrese monto de factura"))
    total = total + monto //incremento el TOTAL
    // let monto = 200+factura
    console.log(`FACTURA ${factura} con nombre ${nombre} y monto ${monto}. El total de todo es ${total}`)
}


// let total = 0
// let cantidad_facturas = 5
// let promedio = 0
// for (let factura = 1; factura <= cantidad_facturas; factura++) {
//     let nombre = "LOQUESEA"+factura
//     let monto = 200+factura
//     total = total + monto
//     console.log(`FACTURA ${factura} con nombre ${nombre} y monto ${monto}. El total de todo es ${total}`)
// }

promedio = calcularPromedio(total, numero_factura)

function escondicionSalida(texto) {
    if (texto == SALIR) {
        return true
    }
    return false
}

function calcularPromedio(monto, cantidad) {
    console.log(`El promedio es ${monto/cantidad}`)
    return monto / cantidad
}

// // Obtenemos el nodo donde vamos a agregar los nuevos elementos

// document.addEventListener("DOMContentLoaded", function(event) { 

//     let padre = document.getElementById("titulo");
//     //Array con la información a agregar
//     let personas = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];
//     //Iteramos el array con for...of
//     for (const persona of personas) {
//         //Creamos un nodo <li> y agregamos al padre en cada ciclo
//         let li = document.createElement("li");
//         li.innerHTML = persona
//         padre.appendChild(li);
//     }
    
// });
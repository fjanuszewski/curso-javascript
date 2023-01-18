// let factura = document.getElementById('factura')

// let numero = prompt("INGRESE UN VALOR")
// if (numero > 500) {
//     factura.className = "rojo"
//     factura.innerHTML = `El valor de la factura es de ${numero} y su valor de iva es ${numero*0.21}`
// } else{
//     factura.className = "verde"
//     factura.innerHTML = `El valor de la factura es de ${numero} y su valor de iva es ${numero*0.21}`
// }

// let parrafo = document.createElement("p");
// // Insertar HTML interno
// parrafo.innerHTML = "<h2>¡Hola Coder!</h2>"; 
// // Añadir el nodo Element como hijo de body
// document.body.append(parrafo);

// parrafo.remove()


// //CODIGO JS
// document.getElementById("nombre").value = "HOMERO";
// document.getElementById("edad").value   = 39;

// let nombre = document.getElementById("nombre").value
// let parrafoNombreUsuario = document.createElement("p");
// // Insertar HTML interno
// parrafo.innerHTML = `<h2>¡Hola ${nombre}!</h2>`; 
// // Añadir el nodo Element como hijo de body
// document.body.append(parrafo);

// //LISTA DE PERSONAS

let padre = document.getElementById("personas");
//Array con la información a agregar
let personas = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];
//Iteramos el array con for...of
for (const persona of personas) {
    //Creamos un nodo <li> y agregamos al padre en cada ciclo
    let li = document.createElement("li");
    li.innerHTML = persona
    padre.appendChild(li);
}
// let buscar = ".eventos__evento"
// let buscarActivos = ".eventos__evento-activo"
// let eventos = document.querySelectorAll(`.eventos__evento h4`)

let nombreBuscar =""
nombreBuscar = prompt("DECIME EL NOMBRE")

if(nombreBuscar){
    buscar(nombreBuscar)
}


function buscar(nombreBuscar) {
    nombreBuscar = nombreBuscar.toUpperCase()
    let listaDeNombres = document.querySelectorAll('li')
    for(nombre of listaDeNombres){
        if(nombre.innerHTML != nombreBuscar){
            nombre.remove();
        }
    }
}

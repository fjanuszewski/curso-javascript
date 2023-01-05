const SALIDA = "ESC"
const IVA=1.21
//PIDO EL NOMBRE
for (let turno = 1; turno <= 20; turno++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre o ingrese ESC para salir");
    if(ingresarNombre==SALIDA){
        break
    }
    while(esSoloTexto(ingresarNombre)){
        ingresarNombre = prompt("Ingrese un nombre valido")
    }
    alert(" Turno  N° "+turno+" Nombre: "+ingresarNombre);
}
let total = 0
//PIDO PRODUCTOS
for (let turno = 1; turno <= 20; turno++) {
    let ingresaProducto = prompt("Ingresar nombre del producto o ingrese ESC para salir");
    if(ingresaProducto==SALIDA){
        break
    }
    let ingresarMonto = Number(prompt("Ingresar monto o ingrese ESC para salir"));
    total = total+sumarIVA(ingresarMonto)
}
alert(total)
function sumarIVA(monto) {
    if (monto ==0) {
        return false
    }
    monto = monto*IVA
    return monto
}
function esSoloTexto(texto) {
    if (texto =="") {
        return false
    }
    return true
}
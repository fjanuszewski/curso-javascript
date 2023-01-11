
let cantidad_facturas = Number(prompt("ingrese cantidad de Facturas")) //PIDO LA CANTIDAD PARA EL CICLO DE FOR

let total = 0
let promedio = 0
let numero_factura = 0
let facturas = []
const SALIR = "ESC"

for (let factura = 1; factura <= cantidad_facturas; factura++) {
    let nombre = prompt(`ingrese nombre de factura o ${SALIR} para salir`)
    if (escondicionSalida(nombre)) {
        alert("GRACIAS POR SU SERVICIO")
        break
    }
    numero_factura = factura
    // let nombre = "LOQUESEA"+factura
    let monto = Number(prompt("ingrese monto de factura"))
    facturas.push({nombre: nombre, monto: monto, items:[]})
    total = total + monto //incremento el TOTAL
    // let monto = 200+factura
    console.log(`FACTURA ${factura} con nombre ${nombre} y monto ${monto}. El total de todo es ${total}`)
}

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
//bonus track
for(const factura of facturas){
    console.log(factura.monto)
}
let cantidad_facturas = Number(prompt("ingrese cantidad de Facturas")) //PIDO LA CANTIDAD PARA EL CICLO DE FOR
let total = 0
let promedio = 0
let numero_factura = 0

const SALIR = "ESC"
const facturas = [];

class Factura {
    constructor(nombre, monto) {
        this.nombre = nombre.toUpperCase();
        this.monto = parseFloat(monto);
        this.montoConIva = 0
        this.items = []
    }
    sumaIva() {
        this.montoConIva = this.monto * 1.21;
    }
    agregaDetalle(detalle) {
        if ((detalle.nombre != undefined) && (Number(detalle.monto) != NaN)) {
            this.items.push({
                nombre: detalle.nombre,
                monto: detalle.monto
            })
        }
        return
    }
}

for (let factura = 1; factura <= cantidad_facturas; factura++) {
    let nombre = prompt(`ingrese nombre de factura o ${SALIR} para salir`)
    if (escondicionSalida(nombre)) {
        alert("GRACIAS POR SU SERVICIO")
        break
    }
    
    // let detalles = agregarDetalles()

    let monto = Number(prompt("ingrese monto de factura"))
    facturas.push(new Factura(nombre, monto));
    total = calcularTotal(facturas)
    console.log(`FACTURA ${factura} con nombre ${nombre} y monto ${monto}. El total de todo es ${total}`)
}

function agregarDetalles() {
    for (let index = 0; index < 100; index++) {
        let nombre = prompt(`ingrese el nombre del item o ${SALIR} para salir`)
        let monto = prompt(`ingrese el monto del item o ${SALIR} para salir`)
        agregaDetalle({nombre,monto})
    }
}

function calcularTotal(items) {
    let totalInterino = 0
    for (const item of items) {
        totalInterino = totalInterino + item.monto
    }
    return totalInterino
}
for (const factura of facturas)
    factura.sumaIva();

promedio = calcularPromedio(facturas)

function escondicionSalida(texto) {
    if (texto == SALIR) {
        return true
    }
    return false
}

function calcularPromedio(items) {
    let cantidad = items.length
    let totalInterino = 0
    for (const item of items) {
        totalInterino = totalInterino + item.monto
    }
    console.log(`El promedio es ${totalInterino / cantidad}`)
    return totalInterino / cantidad
}
//bonus track
for (const factura of facturas) {
    console.log(factura.monto)
}

let buscar = prompt("¿QUERES BUSCAR UNA FACTURA?, SI QUIERE CANCELAR INGRESE ESC")

if (buscar != SALIR) {
    const resultado = facturas.find((factura) => factura.nombre === buscar.toUpperCase())
    alert(`FACTURA ${facturas.indexOf(resultado)+1} con nombre ${resultado.nombre} y monto ${resultado.monto}. El iva es ${resultado.montoConIva}. El total de todo es ${total}`)
}

let cantidad_facturas = Number(prompt("ingrese cantidad de Facturas")) //PIDO LA CANTIDAD PARA EL CICLO DE FOR
let total = 0
let promedio = 0
let numero_factura = 0

const SALIR = "ESC"
const facturas = [];

class Factura {
    constructor(nombre, monto) {
        this.nombre  = nombre.toUpperCase();
        this.monto  = parseFloat(monto);
        this.montoConIva = 0
    }
    sumaIva() {
        this.montoConIva = this.monto * 1.21;
    }
}

for (let factura = 1; factura <= cantidad_facturas; factura++) {
    let nombre = prompt(`ingrese nombre de factura o ${SALIR} para salir`)
    if (escondicionSalida(nombre)) {
        alert("GRACIAS POR SU SERVICIO")
        break
    }
    numero_factura = factura

    let monto = Number(prompt("ingrese monto de factura"))
    
    facturas.push(new Factura(nombre,monto));

    total = total + monto //incremento el TOTAL

    console.log(`FACTURA ${factura} con nombre ${nombre} y monto ${monto}. El total de todo es ${total}`)
}

for (const factura of facturas)
    factura.sumaIva();


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

let buscar = prompt("¿QUERES BUSCAR UNA FACTURA?, SI QUIERE CANCELAR INGRESE ESC")

if(buscar != SALIR){
    const resultado = facturas.find((factura) => factura.nombre === buscar.toUpperCase())
    alert(`FACTURA ${facturas.indexOf(resultado)+1} con nombre ${resultado.nombre} y monto ${resultado.monto}. El iva es ${resultado.montoConIva}. El total de todo es ${total}`)
}



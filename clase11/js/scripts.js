// let soyUnBool = true
let soyUnTexto = ""

// console.log(soyUnTexto)

// const esValido = (soyUnTexto) => {
//     if ((soyUnTexto) && (soyUnTexto != '') && (soyUnTexto != '          ') && (soyUnTexto.length > 10) && (typeof soyUnTexto == 'string')) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(esValido(soyUnTexto))

// let contador = 0


// // let factura = prompt("MONTO DE FACTURA")
// // listaFacturas.push(factura)
// // while (factura<500){
// //     let factura = prompt("MONTO DE FACTURA")
// //     listaFacturas.push(factura)
// // }

// while (!esValido(soyUnTexto)) { //if() => true/false/true
//     soyUnTexto = prompt("por favor ingresa un texto valido")
//     contador++
// }
// console.log(contador)


// let regex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
// // regex.test('skjvbhikjrhfv')

// function check(soyUnTexto) {
//     console.log(soyUnTexto + " match: " + regex.test(soyUnTexto));
// }


// let listaFacturas = []
// let factura = 0
// do {
//     factura = prompt("MONTO DE FACTURA")
//     listaFacturas.push(factura)
// } while (factura < 500);

// for (let numeroFactura = 0; numeroFactura < listaFacturas.length; numeroFactura++) {
//     console.log(listaFacturas[numeroFactura])
// }


const esValido = (soyUnTexto) => {
    if ((soyUnTexto) && (soyUnTexto != '') && (soyUnTexto != '          ') && (soyUnTexto.length > 10) && (typeof soyUnTexto == 'string')) {
        return true
    } else {
        return false
    }
}


const misValidadores = {
    esValido: (soyUnTexto) => {
        if ((soyUnTexto) && (soyUnTexto != '') && (soyUnTexto != '          ') && (soyUnTexto.length > 10) && (typeof soyUnTexto == 'string')) {
            return true
        } else {
            return false
        }
    },
    esInvalido: (soyUnTexto) => {
        if ((soyUnTexto) && (soyUnTexto != '') && (soyUnTexto != '          ') && (soyUnTexto.length > 10) && (typeof soyUnTexto == 'string')) {
            return false
        } else {
            return true
        }
    }
}

misValidadores.esInvalido(soyUnTexto)

const calculadora = {
    suma: (valor1, valor2) => {
        return valor1 + valor2
    },
    resta: (valor1, valor2) => {
        return valor1 - valor2
    },
    multiplicacion: (valor1, valor2) => {
        return valor1 * valor2
    }
}

calculadora.suma(100, 200)

let listaDeProductos = [{
    nombre: "leche",
    precio: 100
}, {
    nombre: "banana",
    precio: 100
}, {
    nombre: "banana",
    precio: 200
}, {
    nombre: "azucar",
    precio: 100
}, {
    nombre: "cafe",
    precio: 100
}]


for (const producto of listaDeProductos) {
    console.log(`PRODUCTO ${producto.nombre}`,listaDeProductos.indexOf({
        nombre: "banana",
        precio: 100
    }))
}

localStorage.setItem("listaDeProductosObjeto", listaDeProductos)
localStorage.setItem("listaDeProductos", JSON.stringify(listaDeProductos))
let listado2 = JSON.parse(localStorage.getItem("listaDeProductos"))
localStorage.setItem("fechaVencimiento", '12/12/2023')
// localStorage.clear()
fechaVencimiento = localStorage.getItem("fechaVencimiento")

if(fechaVencimiento < fechaVencimiento ){
    localStorage.clear()
}
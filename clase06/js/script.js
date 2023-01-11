// // Declaraciòn de array vacío
// const arrayA = [];
// // Declaracion de array con nùmeros
// const arrayB = [1,2];
// // Declaracion de array con strings
// const arrayC = ["C1","C2","C3"];
// // Declaracion de array con booleanos
// const arrayD = [true,false,true,false];
// // Declaracion de array mixto
// const arrayE = [1,false,"C4"];

// const objeto = {texto: "A", numero: 16}

// const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

// let facturas = ["banana", "ensalada"]
// //RECORRIENDO ARRAY
// const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// const masculinos = nombres.slice(1, 3);


// //Declaraciòn de array vacío y variable para determinar cantidad
// const listaNombres = [];
// let   cantidad     = 5;
// let bloquear = false
// //Empleo de do...while para cargar nombres en el array por prompt()
// do{
//    let entrada = prompt("Ingresar nombre");
//    listaNombres.push(entrada.toUpperCase());
//    console.log(listaNombres.length);
// }while(listaNombres.length != cantidad)
// //Concatenamos un nuevo array de dos elementos
// const nuevaLista = listaNombres.concat(["ANA","EMA"]);
// //Salida con salto de línea usando join
// alert(nuevaLista.join("\n"));


// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// // recibo el elemento a borrar por parámetro
// const eliminar = (nombre) => {
//     // busco su índice en el array
//     let index = nombres.indexOf(nombre)

//      // si existe, o sea es distinto a -1, lo borro con splice
//     if (index != -1 ) {
//         nombres.splice(index, 1)
//     } 
// }

// eliminar('Pedro')

// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa',{nombre:"fabian", apellido:"januszewski"}]

// const persona = {
//     nombre: "fabian",
//     apellido: "januszewski",
//     telefonos: [321313, 1221874654],
//     direccion: {
//         calle: "av siempre viva",
//         numero: 13213,
//         pais: "argentina",
//         colores: ["verde", "amarillo"]
//     }
// }


class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos)
    producto.sumaIva();





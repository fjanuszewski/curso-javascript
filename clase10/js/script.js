// localStorage.setItem('bienvenida', '¡Hola Code!');
// sessionStorage.setItem('esValido', true);

// localStorage.removeItem('bienvenida');
// sessionStorage.removeItem('esValido');
// localStorage.clear()    //elimina toda la información
// sessionStorage.clear() //elimina toda la información

//PASAR A STRING UN OBJETO
// const producto1 = { id: 2, producto: "Arroz" };
// const enJSON    = JSON.stringify(producto1);

// console.log(enJSON); // {"id":2,"producto":"Arroz"}
// console.log(typeof producto1); // object
// console.log(typeof enJSON);    // string

// localStorage.setItem("producto1", enJSON);
// // Se guarda {"id":2,"producto":"Arroz"}

//PASAR A OBJETO UN STRING
// const enJSON    = '{"id":2,"producto":"Arroz"}';
// const producto1 = JSON.parse(enJSON);

// console.log(typeof enJSON);     // string
// console.log(typeof producto1);  // object
// console.log(producto1.producto); // Arroz

// const producto2 = JSON.parse(localStorage.getItem("producto1"));
// console.log(producto2.id);  // 2 

// let loquesea = '{"nombre": "ENSALADA", "precio": 200}'
// let loqueseaEnobjeto = JSON.parse(loquesea)

// const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
//                   {  id: 2,  producto: "Fideo", precio: 70 },
//                   {  id: 3,  producto: "Pan"  , precio: 50},
//                   {  id: 4,  producto: "Flan" , precio: 100}];

// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
// //Almacenar producto por producto
// for (const producto of productos) {
//     guardarLocal(producto.id, JSON.stringify(producto));
// }
// // o almacenar array completo
// guardarLocal("listaProductos", JSON.stringify(productos));

let valorProducto= 0
let nombreProducto= ""
let total=0
let iva=1.21
let lista=""

//IVA
function agregaIva(total,iva){
    
    return (total * iva)
}

//SALUDO

function saludo(){
    console.log("Hola, bienvenido al Carrito de compras")
    }

//LOGIN

function login(){
    usuario = prompt("Ingrese su nombre de Usuario")
    
    if(usuario == ""){
        alert("INGRESE UN USUARIO VALIDO")
    }
    return console.log("Usuario INGRESADO:"+" "+usuario)
    
    }

//CONSTRUCTOR PRODUCTO

class Productos {
    constructor(nombreProducto, valorProducto) {
        this.nombreProducto = nombreProducto;
        this.valorProducto = parseFloat(valorProducto);
    }
}


//DECLARACION DE ARRAY VACIA

const productos = [];
const productosComprados= [];


// FUNCION COMPRA

function compra (){

    cantidadProductos=Number(prompt("Ingrese cantidad de productos"))

    for (let i= 0; i<cantidadProductos; i++) {
        nombreProducto=prompt(`Ingrese el NOMBRE del Producto ${i+1} o ESC para CANCELAR`)
        if (nombreProducto == "esc"|| nombreProducto == "ESC") {
            break
        }
        valorProducto=Number(prompt(`Ingrese el VALOR del producto ${i+1}`))
        total=valorProducto+total
        productos.push(new Productos(nombreProducto,valorProducto));
    }
}



saludo()
login()
compra()
informes()



//INFORME

function informes(){
    //{nombreProducto: 'manteca', valorProducto: 300}
    // productos = [{nombreProducto: 'manteca', valorProducto: 300},{nombreProducto: 'manteca', valorProducto: 300}]
    productos.forEach((producto) => console.log(producto.nombreProducto));
    console.log("El monto total sin IVA es ", total) 
    console.log("El Total con IVA es: ", agregaIva(total,iva))
    
}

let buscar = prompt("desea buscar")

const resultado = productos.find((producto) => producto.nombreProducto == buscar)

console.log(resultado)
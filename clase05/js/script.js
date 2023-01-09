// let nombre = "Homero";
// let edad = 39;
// let calle = "Av. Siempreviva 742";

// // Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal
let personaSimple = {
    nombre: "Homero",
    edad: 39,
    calle: "Av. Siempreviva 742",
    apellido: "januszewski",
    activo: true
}
// const persona3 = {
//     nombre: "Fabian",
//     edad: 34,
//     calle: "Calle falsa 123",
//     apellido: "januszewski"
// }
// persona1.nombre = 56
// persona1.nuevaPropiedad = 32
// console.log(persona1)
// console.log(persona1.nombre)
// console.log(persona1.edad)
// console.log(persona1.calle)

// function Persona(nombre, edad, calle, pais) {
//     this.nombre = nombre;
//     this.edad 	 = edad;
//     this.calle  = calle;
//     this.pais = pais
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742", "argentina");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

// console.log(persona1)
// console.log(persona2)

// persona2.pais = "Colombia"
// console.log(persona2)

// let nombre = "Homero";
// let edad = 39;
// let calle = "Av. Siempreviva 742";

// function Persona(literal) {
//     //{nombre:"Homero", edad: 39, calle: "Av. Siempreviva 742"}
//     this.nombre = literal.nombre;
//     this.edad   = literal.edad;
//     this.calle  = literal.calle;
// }
// const persona1 = new Persona({ nombre, edad, calle});

// let cadena = "HOLA CODER";
// //Propiedad de objeto String: Largo de la cadena.
// console.log(cadena.length);
// //Método de objeto String: Pasar a minúscula.
// console.log(cadena.toLowerCase());
// //Método de objeto String: Pasar a mayúscula.
// console.log(cadena.toUpperCase());

// function Persona(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad   = edad;
//     this.calle  = calle;
//     this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
// persona1.hablar();
// persona2.hablar();

// const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
// //devuelve true porque la clave "nombre" existe en el objeto persona1
// console.log( "nombre" in persona1);
// //devuelve false porque la clave "origen" no existe en el objeto persona1
// console.log( "origen" in persona1);
// //recorremos todas las propiedades del objeto con el ciclo for...in
// for (const propiedad in persona1) {
//     console.log(persona1[propiedad]);
// }

class Television{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
        this.canal = 5;
        this.activo = false;
        this.volumen = 0;
        this.plan = 0
    }
    activar(){
        this.activo = true
        return this.activo
    }
    cambiarCanal(canal){
        this.canal = canal
        return this.canal
    }
    subirVolumen(){
        this.volumen = this.volumen+1
        return this.volumen
    }
    cambiarPlan(plan){
        if(plan >3){
            return
        }
        this.plan = plan
    }
}

const tv = new Television("LG", 39, "Av. Siempreviva 742");
const usuario = new Television("SAMSUNG", 39, "Av. Siempreviva 742");
usuario.cambiarPlan(3)


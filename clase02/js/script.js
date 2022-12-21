console.log("Hola, bienvenido a mi JavaScript");
let nombre = "";
nombre = prompt("Ingrese el nombre")
// console.log("NOMBRE INGRESADO:"+" "+nombre)
if(nombre == ""){
    alert("INGRESE UN VALOR")
}else{
    alert("NOMBRE INGRESADO:"+" "+nombre)
}

let monto = Number(prompt("Ingrese el valor"))
let monto2 = Number(prompt("ingrese valor 2"))
let total = monto+monto2
console.log(total)
if(total < 500){
    alert("Aun no superas los 500") 
}else if(total < 1000){
    alert("Bien! ya superaste los 500")
}
else{
    alert("VALOR INGRESADO:"+" "+total+ " Bien! superaste los 1000!")
}
let edad = Number(prompt("ingrese edad"))

if(edad > 16  && edad < 65){
    console.log("bienvenido a su licencia")
} else if(typeof edad != "Number"){
    alert("ingrese un valor de tipo numero")
}else {
    console.log("por tu edad no podes anotarte")
}

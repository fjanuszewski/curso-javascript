class Usuario {
    constructor(nombre, modoOscuro) {
        this.nombre = nombre
        this.modoOscuro = modoOscuro
    }
    setNombre(nuevoNombre) {
        if (nombre != '') {
            this.nombre = nuevoNombre
        }
    }
    setModoOscuro(nuevoModo) {
        this.modoOscuro = nuevoModo
    }
}

let plantillaModoOscuro = `<div class="inputSwitch">
                            <label class="etiquetaDeInput"><b>Modo Oscuro</b></label>
                            <label class="switch">
                                <input type="checkbox" id="modoOscuro">
                                <span class="slider round"></span>
                            </label>
                            </div>`

let plantillaDatosUsuario = `<div id="datosUsuario">
                                <label class="etiquetaDeInput" for="nombre"><b>Nombre</b></label>
                                <input id="inputNombre" type="text" placeholder="Nombre" name="nombre" required>
                                ${plantillaModoOscuro}
                            </div>`

let objectoLocalStorage = JSON.parse(localStorage.getItem("usuario")) //busco en localStorage el objeto y hago un parse para que JS me devuelva un objeto

console.log("objectoLocalStorage ===>")
console.log(objectoLocalStorage)

if (objectoLocalStorage) { //Si Nombre tiene contenido, entonces lo muestro
    let usuario = new Usuario(objectoLocalStorage.nombre, objectoLocalStorage.modoOscuro)

    console.log("usuario ===>")
    console.log(usuario)

    asignarValoresAlosInputs(usuario)
    activarModoOscuro(objectoLocalStorage.modoOscuro)

} else {
    let usuario = new Usuario('', false)
    asignarValoresAlosInputs(usuario)
}

document.getElementById("modoOscuro").addEventListener('change', activarModoOscuro) //Ecucho cuando hay cambios en el check de modo oscuro
document.getElementById("formGrabarDatos").addEventListener("submit", grabarDatos);
document.getElementById("recargar").addEventListener('click', ()=>{
    location.reload(); //Con este metodo podemos recargar la pagina
})
function grabarDatos(e) {
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    let valorInputNombre = document.getElementById("inputNombre").value
    let valorInputModoOscuro = document.getElementById("modoOscuro").checked
    localStorage.setItem("usuario", JSON.stringify({
        nombre: valorInputNombre,
        modoOscuro: valorInputModoOscuro
    }))
}



function activarModoOscuro() {
    if (document.getElementById("modoOscuro").checked) {
        document.body.className = "oscuro"
    } else {
        document.body.removeAttribute('class');
    }
}

function asignarValoresAlosInputs(usuario) {
    if (usuario.nombre != '') {
        document.getElementById("bienvenida").innerHTML = `Hola de nuevo ${usuario.nombre}, aqui puedes modificar tus datos`
        document.getElementById("inputNombre").value = usuario.nombre
        document.getElementById("modoOscuro").checked = usuario.modoOscuro
    } else {
        document.getElementById("bienvenida").innerHTML = `Hola, por favor dinos tus datos y preferencias de experiencia`

    }
}
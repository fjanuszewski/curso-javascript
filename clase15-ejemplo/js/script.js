const STUDENT = ''
document.getElementById("loader").style.display = "none";

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
document.getElementById("recargar").addEventListener('click', () => {
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

    grabarDatosServer({
        userId: valorInputNombre,
        modoOscuro: valorInputModoOscuro
    })
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



const buscarUsuario = async (userId) => {
    document.getElementById("loader").style.display = "";
    document.getElementById("main").style.display = "none";
    const resp = await fetch(`https://api.fabianjanuszewski.com/34165/user/${userId}`)
    const data = await resp.json()
    if (!resp.ok) {
        mostrarMensaje({
            titulo: "¡El usuario no existe!",
            comentario: `respuesta del servidor: ${data.error.message}`,
            icono: "warning"
        })

        document.getElementById("loader").style.display = "none";
        document.getElementById("main").style.display = "";
        return
    }
    console.log(data)
    let usuario = new Usuario(data.userId, data.modoOscuro)
    asignarValoresAlosInputs(usuario)
    activarModoOscuro()
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "";
}


const grabarDatosServer = async (user) => {
    document.getElementById("loader").style.display = "";
    document.getElementById("main").style.display = "none";
    const resp = await fetch('https://api.fabianjanuszewski.com/34165/user/', {
        method: 'POST',
        body: JSON.stringify({
            userId: user.userId,
            modoOscuro: user.modoOscuro
        })
    })
    const data = await resp.json()
    if (resp.ok) {
        mostrarMensaje({
            titulo: "¡Usuario grabado con exito!",
            comentario: `¡El usuario ${user.userId} fue grabado con exito`,
            icono: "success"
        })
    } else {
        console.log(data)
        mostrarMensaje({
            titulo: "¡El usuario no fue grabado!",
            comentario: `respuesta del servidor: ${data.error.message}`,
            icono: "error"
        })
    }
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "";
    return data
}
document.getElementById("traerUsuario").addEventListener("click", () => {
    buscarUsuario(document.getElementById("inputNombre").value)
});

const actualizarUsuario = async (user) => {
    document.getElementById("loader").style.display = "";
    document.getElementById("main").style.display = "none";
    const resp = await fetch('https://api.fabianjanuszewski.com/34165/user/', {
        method: 'PUT',
        body: JSON.stringify({
            userId: user.userId,
            modoOscuro: user.modoOscuro
        })
    })
    const data = await resp.json()
    if (resp.ok) {
        mostrarMensaje({
            titulo: "¡Usuario actualizado con exito!",
            comentario: `El usuario ${user.userId} fue actualizado con exito`,
            icono: "success"
        })
    } else {
        console.log(data)
        mostrarMensaje({
            titulo: "¡El usuario no fue actualizado!",
            comentario: `respuesta del servidor: ${data.error.message}`,
            icono: "error"
        })
    }
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "";
    return data
}
document.getElementById("actualizarUsuario").addEventListener("click", () => {
    actualizarUsuario({
        userId: document.getElementById("inputNombre").value,
        modoOscuro: document.getElementById("modoOscuro").checked
    })
});

const deleteUsuario = async (user) => {
    document.getElementById("loader").style.display = "";
    document.getElementById("main").style.display = "none";
    const resp = await fetch(`https://api.fabianjanuszewski.com/34165/user/${user}`, {
        method: 'DELETE'
    })
    const data = await resp.json()
    if (resp.ok) {
        mostrarMensaje({
            titulo: "¡Usuario eliminado con exito!",
            comentario: `El usuario ${user} fue eliminado con exito`,
            icono: "success"
        })
    } else {
        console.log(data)
        mostrarMensaje({
            titulo: "¡El usuario no fue eliminado!",
            comentario: `respuesta del servidor: ${data.error.message}`,
            icono: "error"
        })
    }
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "";
    return data
}
document.getElementById("deleteUsuario").addEventListener("click", () => {
    deleteUsuario(document.getElementById("inputNombre").value)
});

function mostrarMensaje(mensaje) {
    Swal.fire({
        title: mensaje.titulo,
        text: mensaje.comentario,
        icon: mensaje.icono,
        showCancelButton: false,
        showConfirmButton: true
    })
}

const traerTodosLosItems = async (student) => {
    const resp = await fetch(`https://api.fabianjanuszewski.com/34165/item?student=${student}`)
    const data = await resp.json()
    let table = document.getElementById("items");

    for (const item of data.items) {
        let row = table.insertRow(1);
        row.setAttribute("id", `fila-${item.itemId}`)
        let itemId = row.insertCell(0);
        let nombre = row.insertCell(1);
        let precio = row.insertCell(2);
        let acciones = row.insertCell(3);
        itemId.innerHTML = item.itemId;
        nombre.innerHTML = item.nombre;
        precio.innerHTML = item.precio;
        acciones.innerHTML = `<i id="delete-${item.itemId}" class="large material-icons delete-item">delete_forever</i>`
    }
}
traerTodosLosItems(STUDENT) //INGRESA EL MISMO NOMBRE DE ALUMNO QUE USASTE CUANDO CREASTE LOS ITEMS

const agregarItem = async (item) => {
    document.getElementById("loader").style.display = "";
    document.getElementById("main").style.display = "none";
    const resp = await fetch('https://api.fabianjanuszewski.com/34165/item/', {
        method: 'POST',
        body: JSON.stringify(item)
    })
    const data = await resp.json()
    if (resp.ok) {
        mostrarMensaje({
            titulo: "Item grabado con exito!",
            comentario: `¡El Item ${item.itemId} fue grabado con exito`,
            icono: "success"
        })
    } else {
        console.log(data)
        mostrarMensaje({
            titulo: "¡El Item no fue grabado!",
            comentario: `respuesta del servidor: ${data.error.message}`,
            icono: "error"
        })
    }
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "";
    return data
}
document.getElementById("agregarItem").addEventListener("click", () => {
    let nuevoItem ={
        itemId:  document.getElementById("nuevoItemId").value,
        nombre:  document.getElementById("nuevoItemNombre").value,
        precio:  document.getElementById("nuevoItemPrecio").value,
        student:  STUDENT,
    }
    agregarItem(nuevoItem)

    let table = document.getElementById("items");        
    let row = table.insertRow(1);
    let itemId = row.insertCell(0);
    let nombre = row.insertCell(1);
    let precio = row.insertCell(2);
    let acciones = row.insertCell(3);
    itemId.innerHTML = nuevoItem.itemId;
    nombre.innerHTML = nuevoItem.nombre;
    precio.innerHTML = nuevoItem.precio;        
    acciones.innerHTML = `<i id="delete-${nuevoItem.itemId}" class="large material-icons delete-item">delete_forever</i>`
});

const deleteItem = async (itemId) => {
    document.getElementById("loader").style.display = "";
    document.getElementById("main").style.display = "none";
    const resp = await fetch(`https://api.fabianjanuszewski.com/34165/item/${itemId}`, {
        method: 'DELETE'
    })
    const data = await resp.json()
    if (resp.ok) {
        mostrarMensaje({
            titulo: "Item eliminado con exito!",
            comentario: `El Item ${itemId} fue eliminado con exito`,
            icono: "success"
        })
    } else {
        console.log(data)
        mostrarMensaje({
            titulo: "¡El Item no fue eliminado!",
            comentario: `respuesta del servidor: ${data.error.message}`,
            icono: "error"
        })
    }
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "";
    return resp.ok
}
document.addEventListener("click", function(e){
    if(e.target.className.includes('delete-item')){
        const itemId = e.target.id.replace('delete-', '')
        const estado = deleteItem(itemId)
        console.log(estado)
        if(estado){
            document.getElementById(`fila-${itemId}`).remove()
        }
    }
});
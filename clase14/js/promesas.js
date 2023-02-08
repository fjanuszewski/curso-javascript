const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (res === true) {
                resolve('Promesa resuelta')
            } else {
                reject('Promesa rechazada')
            }    
            // res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
        }, 1000)
    })
}

eventoFuturo(true)
    .then( (response) => {
        Swal.fire({
            title: 'TERMINE DE BUSCAR!!!',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
        })
    }).catch( (error) => {
        Swal.fire({
            title: '¿Estas ahi?',
            text: 'Vemos que hace 5 segundos no mueves el mouse',
            icon: 'error',
            showCancelButton: false,
            showConfirmButton: false
        })
    }).finally( () => {
        console.log("Fin del proceso")
    })

    const BD = [
        {id: 1, nombre: 'Producto 1', precio: 1500},
        {id: 2, nombre: 'Producto 2', precio: 2500},
        {id: 3, nombre: 'Producto 3', precio: 3500},
        {id: 4, nombre: 'Producto 4', precio: 3500},
    ]
    function obtenerProductos(){
        return irAlServidorDeProductos
    }
    const pedirProductos = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(BD)
            }, 15000)
        })
    }
    
    let productos = []

    const renderProductos = (arr) => {
        for (const objeto of arr) {
            document.write(objeto.nombre)
        }
        
    }
    
    // asincrónicamente pedimos los datos y generamos la vista
    pedirProductos()
        .then((res) => {
            productos = res
            renderProductos(productos)
        })
    
// fetch('https://api.fabianjanuszewski.com/34165/item', {
//         method: 'POST',
//         body: JSON.stringify({
//             itemId: '110',
//             student: "fabian",
//             color: "amarillo",
//             precio:500
//         })
//     })
//     .then((response) => response.json())
//     .then((data) => console.log(data))


// fetch('/clase15/data.json')
//     .then( (res) => res.json())
//     .then( (data) => {

//         data.forEach((producto) => {
//             const li = document.createElement('li')
//             li.innerHTML = `
//                 <h4>${producto.nombre}</h4>
//                 <p>${producto.precio}</p>
//                 <p>Código: ${producto.id}</p>
//                 <hr/>
//             `

//             lista.append(li)
//         })
//     })

fetch('https://api.fabianjanuszewski.com/34165/item/105')
    .then((response) => {

            console.log("ESTO DENTRO DE PEDIR BUSCAR ITEM")
            return response.json()
        }

    )
    .then((data) => console.log(data))

const lista = document.querySelector('#listado')

const pedirPosts = async () => {
    const resp = await fetch('https://api.fabianjanuszewski.com/34165/item/105')
                            .then((response) => {
                                    console.log("ESTO DENTRO DE PEDIR BUSCAR ITEM CON AWAIT")
                                    return response.json()
                                }
                            ).then((data) => console.log(data))
    
    console.log("ESTO DENTRO PEDIRS POSTS")
    data.forEach((post) => {
        const li = document.createElement('li')
        li.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.body}</p>
        `
        lista.append(li)
    })
}

pedirPosts()
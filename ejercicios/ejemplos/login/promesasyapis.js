// Promesas
new Promise(function(resolve, reject){
    // Exito y no exitosa
})

const callApi = new Promise((resolve, reject) => {
    setTimeout(() => {
        const listoExitoso = true;
        if(listoExitoso){
            resolve('Todo OK')
        } else {
            reject('Error operación no exitosa')
        }
    }, 3000)
})

callApi
    .then((informacion) => {
        console.log(informacion, 'Ingreso al then')
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('Promesa finalizada')
    })

// async / await

async function nombreFuncion() {
    try {
        const resul = await callApi();
        console.log(resul)
    } catch (error) {
        console.log(error)
    }
}

// APIs
navigator.geolocation.getCurrentPosition((position) => {
    console.log('ingreso a la geolocalizacion')
})

const informacionApiPoke = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((respuesta) => {
        console.log(respuesta)
        return respuesta.json()
    })
    .catch((error) => console.log(error))


informacionApiPoke.then((respuestaConDatos) => {
    console.log(respuestaConDatos.abilities)
    const elemento = document.getElementById('pokemon');

    respuestaConDatos.abilities.forEach(element => {
        const parrafo = document.createElement('p')
        parrafo.textContent = element.ability.name
        elemento.appendChild(parrafo)
    });

    
})





const url = 'https://nombredelservicio'
const data = {
    usuario: 'Pepito',
    contrasena: '12345'
}
/*
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: data
})
    .then((respuesta) => {return respuesta.json()} )
    .then((respuestaJson) => console.log(respuestaJson.abilities))
    .catch((error) => console.log(error))*/
const tarjetasDeServicios = [
    {
        "nombre": "Alquiler",
        "precio": 200.000,
        "descripcion": "Lorem Ipsum"
    },
    {
        "nombre": "Venta",
        "precio": "Desde 50.000",
        "descripcion": "Lorem Ipsum tarjeta venta"
    },
    {
        "nombre": "Permuta",
        "precio": 0,
        "descripcion": "Lorem Ipsum tarjeta permuta"
    },
]

function mostrarTarjetas(arregloInformacion){
    let lista = "<h2>Listado de servicios aqui</h2>";
    arregloInformacion.forEach(element => {
        lista += `<div class="listaContenedor"> 
            <h1 class="titulo">${element.nombre}</h1>
            <span>${element.precio}</span>
            <p>${element.descripcion}</p>
        </div>`
    });

    document.getElementById('informacionDeServicios').innerHTML = lista
}

mostrarTarjetas(tarjetasDeServicios)
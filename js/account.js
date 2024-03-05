import * as users from './users.js';




const listUsers = users.users;


const emailBuscado = localStorage.getItem('email');


// for (let i = 0; i < usuarios.length; i++) {

//     if (usuarios[i].email === emailBuscado) {
//         console.log('El correo electrónico ' + emailBuscado + ' pertenece a ' + usuarios[i].nombre);
//         // const name = usuarios[i].nombre;
//         // const email = usuarios[i].email;
//         // const description = usuarios[i].descripcion;
//     }
// }




function mostrarDatosUsers(listUsers){
    let lista = "<h2>Listado de servicios aqui</h2>";
    listUsers.forEach(element => {
        lista += `<div class="listaContenedor"> 
            <h1 class="titulo">${element.nombre}</h1>
            <span>${element.email}</span>
            <p>${element.descripcion}</p>
        </div>`
    });

    document.getElementById('informacionDeUsuarios').innerHTML = lista
}

mostrarDatosUsers(listUsers) 









// Prueba que importa Json y LocalStorage
console.log(users.users);
const divtest = localStorage.getItem('email')
console.log(divtest)
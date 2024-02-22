class Usuario {
    constructor(nombre, email, contrasena){
        this.nombre = nombre;
        this.email = email;
    }

    validarNombre(){
        return this.nombre !== '';
    }

    validarEmail(){
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(regexEmail.test(email)){
            return this.email;
        }
    }

    validarContrasena(){
        return this.contrasena !== '';
    }
}

class GestionUsuarios {
    constructor(usuarios){
        this.usuarios = [];
    }

    agregarUsuario(nombre, email, contrasena){
        const nuevoUsuario = new Usuario(nombre);
        
        if(nuevoUsuario.validarNombre()){
            this.usuarios.push(nuevoUsuario);
        }
    }
}

let agregarUsuario = new GestionUsuarios();

agregarUsuario.agregarUsuario('Daniel');
agregarUsuario.agregarUsuario('Catalina');
agregarUsuario.agregarUsuario('');

console.log(agregarUsuario, ' Ver la clase GestionUsuarios');
class Usuario {
    constructor(nombre){
        this.nombre = nombre;
    }

    validarNombre(){
        return this.nombre !== '';
    }

}

class GestionUsuarios {
    constructor(){
        this.usuarios = []
    }

    agregarUsuario(nombre){
        const nuevoUsuario = new Usuario(nombre);
        if(nuevoUsuario.validarNombre()){
            this.usuarios.push(nuevoUsuario)
        }
    }

    
}

let agregarUsuario = new GestionUsuarios();

agregarUsuario.agregarUsuario('Daniel')
agregarUsuario.agregarUsuario('Catalina')
agregarUsuario.agregarUsuario('')

console.log(agregarUsuario.usuarios, 'Ver la clase GestionUsuarios')
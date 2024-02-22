class ManejadorDeSesion {
    constructor(){
        this.usuarios = [
            {
                usernameObjeto: "Pepito",
                passwordObjeto: "1234"
            },
            {
                usernameObjeto: "Juanita",
                passwordObjeto: "123456"
            }
        ]
    }

    autenticacion(usernameDigitadoPorUsuario, passwordDigitadoPorUsuario){
        return this.usuarios.some(
            info => info.usernameObjeto === usernameDigitadoPorUsuario 
            && info.passwordObjeto === passwordDigitadoPorUsuario
        )
    }

}

function envioDeFormulario(event){

    event.preventDefault();

    const usuario = document.getElementById('username').value;
    const contrasena = document.getElementById('password').value;

    const inicioSesion = new ManejadorDeSesion();

    if(inicioSesion.autenticacion(usuario, contrasena)){
        console.log("Autenticacion exitosa")
    } else {
        console.log("Error en la información");
        document.getElementById('error').classList.add('mostrarMensaje')
    }

}
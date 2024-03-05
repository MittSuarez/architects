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

class ValidacionFormulario {
    constructor(formulario){
        this.formulario = formulario;
        this.campos = this.formulario.querySelectorAll('input')
        this.errorMessages = {
            usuario: 'Digite el usuario correctamente'
        }
    }

    validarUsuario() {
        const usuarioInput = this.formulario.querySelector('#username')
        const usuario = usuarioInput.value.trim();
        
        if(usuario === ''){
            this.mostrarError(usuarioInput, this.errorMessages.usuario);
            return false;
        }
        return true;
    }

    validarContrasena() {
        const passwordInput = this.formulario.querySelector('#password')
        // Contraseña de ejemplo: abcD221#
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%+=])[0-9a-zA-Z!@#$%+=]{8,}$/;
        const validacionPassword = passwordRegex.test(passwordInput.value)

        console.log(validacionPassword, 'aqui hace referencia')

    }
    
    mostrarError(input, mensaje) {
        const contenedorMensaje = document.createElement('div')
        contenedorMensaje.className = 'error';
        contenedorMensaje.innerText = mensaje;
        input.parentNode.appendChild(contenedorMensaje)
    }

    limpiarErrores(){
        const errores = this.formulario.querySelectorAll('.error')
        errores.forEach(error => error.remove())
    }

    validarFormulario(){
        this.limpiarErrores();
        this.validarContrasena()
        if(this.validarUsuario()){
            // Llamado de un servicio
            return true
        } else {
            window.location.href =  'google.com'
        }
    }

    inicioFormulario() {
        this.formulario.addEventListener('submit', this.validarFormulario.bind(this))
    }
}

function envioDeFormulario(event){

    event.preventDefault();

    const selectForm = document.getElementById('login')
    const validacionDeCampos = new ValidacionFormulario(selectForm)

    const usuario = document.getElementById('username').value;
    const contrasena = document.getElementById('password').value;

    const inicioSesion = new ManejadorDeSesion();

    if(validacionDeCampos.validarFormulario()){
        if(inicioSesion.autenticacion(usuario, contrasena)){
            console.log("Autenticacion exitosa");
            localStorage.setItem('nombre', usuario);
            window.location.href = 'inicio.html'
        } else {
            console.log("Error en la información");
        }
    }

}
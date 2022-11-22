
const formulario = document.querySelector('#formulario');
function validar() {

    //pruebas
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email == "correo@correo.com" && password == "1234") {
        document.form.submit();
    } else {
        LimpiarAlerta();
        //generar el html
        const error = document.createElement('P');
        error.textContent = 'correo o password invalido Intente de nuevo';
        error.classList.add('error');
        //inyectar el error al fomulario
        formulario.appendChild(error);

        setTimeout(() => {
            error.remove();
        }, 3000);
    }
}

function LimpiarAlerta(){
    const alerta = document.querySelector('.error');

    if(alerta){
        alerta.remove();
    }
}

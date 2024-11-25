document.addEventListener('DOMContentLoaded', function(){

    // seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    // Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e){
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        }else{
            mostrarAlerta(`El campo ${e.target.id} es correcto`, e.target.parentElement);
        }
    }
    function mostrarAlerta(mensaje, referencia){
        // comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600')
        if(alerta){
            alerta.remove();
        }

        // generar alerta HTMl 
        const error = document.createElement('P')
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        const verificado = document.createElement('P');
        verificado.textContent = mensaje;
        verificado.classList.add('bg-green-600', 'text-white', 'p-2', 'text-center');

        // inyectar el error al formulario
        referencia.appendChild(error)
        referencia.appendChild(verificado)
    }
    
})
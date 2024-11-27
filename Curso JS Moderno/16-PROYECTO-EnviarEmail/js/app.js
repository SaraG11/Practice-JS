document.addEventListener('DOMContentLoaded', function(){

    const datos ={
        email: '',
        asunto: '',
        mensaje: ''
    }

    // seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')

    // Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    function validar(e){
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            datos[e.target.name] = '';
            comprobarDatos();
            return;
        }
        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('El email no es valido', e.target.parentElement);
            datos[e.target.name] = '';
            comprobarDatos();
            return;
        }
        limpiarAlerta(e.target.parentElement);

        // Asignar valores 
        datos[e.target.name] = e.target.value.trim().toLowerCase();
        // comprobar el objeto de datos
        comprobarDatos();

        
    }
    function mostrarAlerta(mensaje, referencia){
        limpiarAlerta(referencia);

        // generar alerta HTMl 
        const error = document.createElement('P')
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        // inyectar el error al formulario
        referencia.appendChild(error)
    }
    function limpiarAlerta(referencia){
        // comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600')
        if(alerta){
            alerta.remove();
        }
    }
    function validarEmail(email){
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email);
        return resultado;
    }
    function comprobarDatos(){
        if(Object.values(datos).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }
    
})
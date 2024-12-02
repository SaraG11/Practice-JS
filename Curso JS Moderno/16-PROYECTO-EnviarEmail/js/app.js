document.addEventListener('DOMContentLoaded', function(){

    const datos ={
        email: '',
        emailCC: '',
        asunto: '',
        mensaje: ''
    }

    // seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputEmailCC = document.querySelector('#emailCC');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');


    // Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputEmailCC.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e){
        e.preventDefault();
        resetFormulario();

    })

    function enviarEmail(e){
        e.preventDefault();
        spinner.classList.add('flex')
        spinner.classList.remove('hidden')
        setTimeout(() =>{
            spinner.classList.remove('flex')
            spinner.classList.add('hidden')
            // reiniciar el objeto datos
            resetFormulario();

            // creando una alerta
            const alertaExito = document.createElement('P')
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';
            formulario.appendChild(alertaExito);
            setTimeout(() =>{
                alertaExito.remove();
            }, 2000);
        }, 3000);
        
    }

    function validar(e){
        if(e.target.value.trim() === '' && e.target.id !== 'emailCC'){
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
        // validar solo si es email. 
        if(e.target.id === 'emailCC' && !validarEmail(e.target.value)){
            mostrarAlerta('El email CC no es valido', e.target.parentElement);
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
        // if(Object.values(datos).includes('')){
        if(datos['email'] === '' || datos['asunto'] === '' || datos['mensaje'] === '' || datos['emailCC'] !== '' && !validarEmail(datos['emailCC'])){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }
    function resetFormulario(){
        // reiniciar el objeto datos
        datos.email = '';
        datos.emailCC = '';
        datos.asunto = '';
        datos.mensaje = '';
        formulario.reset();
        comprobarDatos();
    }
    
})
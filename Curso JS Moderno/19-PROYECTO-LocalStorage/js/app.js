// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners

eventListener();
function eventListener(){
    formulario.addEventListener('submit', agregarTweet)
}
// Funciones

function agregarTweet(e){
    e.preventDefault();
    // text area donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    // validacion
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacio')
        
        return; //evita que se ejecuten mas lineas de codigo
    }

    // Añadir al arreglo de los tweets
    tweets = [...tweets, tweet];
    console.log(tweets)

    
}

// Mostrar mensaje de error
function mostrarError(error){
    const mensajeError= document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error')

    // insertarlo en el contenido
    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError);

    // elimina la alerta despues de 3 segundos
    setTimeout(() =>{
        mensajeError.remove();
    },3000)
}
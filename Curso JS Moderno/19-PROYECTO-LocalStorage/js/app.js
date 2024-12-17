// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners

eventListener();
function eventListener(){
    // cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet)

    // cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () =>{
        tweets = JSON.parse( localStorage.getItem('tweets')) || [];

        console.log(tweets)
        crearHtml();
    } )
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

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // Añadir al arreglo de los tweets
    tweets = [...tweets, tweetObj];
    
    // Una vez agregado al objeto, crear HTML
    crearHtml();

    // reiniciar el formulario
    formulario.reset();

    
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

// Muestra un listado de los tweets
function crearHtml(){

    limpiarHtml();

    if(tweets.length > 0){
        tweets.forEach(tweet => {
            // agregar un boton de eliminar 
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerHTML = 'X';

            // añadir funcion de eliminar 
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            const li = document.createElement('li');
            // Añadir el texto
            li.innerText = tweet.tweet
            // Asignar el boton
            li.appendChild(btnEliminar)
            // insertarlo en el html
            listaTweets.appendChild(li)
        }); 
    }

    sincronizarStorage();

}

// Agrega los tweets actuales al LS
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

function limpiarHtml(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
}

function borrarTweet(id){
    // console.log('Borrando...', id)
    tweets = tweets.filter( tweet => tweet.id !== id)
    crearHtml();
}
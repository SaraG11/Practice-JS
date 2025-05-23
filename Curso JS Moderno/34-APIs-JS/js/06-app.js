const salida = document.querySelector('#salida')
const microfono = document.querySelector('#microfono')

microfono.addEventListener('click', ejecutarSpeechAPI)

function ejecutarSpeechAPI(){
    const speetchRecognition = webkitSpeechRecognition
    const recognition = new SpeechRecognition()
}
const paises = [];

function nuevoPais(pais, callback){
    paises.push(pais)
    console.log(`Agregando: ${pais} `)
    callback();
}

function mostrarPiases(){
    console.log(paises)
}

function iniciarCallbackHell(){
    setTimeout( () => {
        nuevoPais('Alemania', mostrarPiases)
    }, 3000)
}

iniciarCallbackHell();
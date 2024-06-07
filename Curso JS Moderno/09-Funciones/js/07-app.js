// comunicacion de funciones
iniciarApp();
function iniciarApp(){
    console.log('Iniciando App...');

    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');
    usuarioAutenticado('pablo');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando Usuario... espere..');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}

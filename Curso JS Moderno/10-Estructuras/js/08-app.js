

const puntaje = 450;

function revisarPuntaje(){
    if(puntaje > 400){
        console.log('Excelente puntaje');
        return;
    }
    
    if( puntaje > 300){
        console.log('Bue puntaje');
        return;
    }
}

revisarPuntaje();

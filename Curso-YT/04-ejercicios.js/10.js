/**
 * crear un array de longitud n y sus elementos 
 * sean numeros de 1 hasta n 
 */

let longitud = 7;

function crearArray(n){
    if(n <= 0){
        return [];
    }
    let arr = [];
    for(let i=0; i < n; i++){
        arr[i] = i + 1;
    }
    return arr;
}

let resultado = crearArray(longitud);
console.log(resultado);
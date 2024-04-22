/**
 * Crear algoritmo que devuelva cantidad 
 * de numeros positivos de un array
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function getPositivos(arr){
    let num_positivos = 0;
    for (elemento of arr ){
        if (elemento > 0){
            num_positivos ++;
        }
    }
    return num_positivos;
    
}

let numeros = getPositivos(array)
console.log(numeros);


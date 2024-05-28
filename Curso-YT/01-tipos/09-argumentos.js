//podemos pasarle parámeros
function suma(a, b){
    console.log(arguments); // variable especial (arguments) para acceder a todos los valores que se pasan a la funcion
    return a + b; // cuando nosotros referenciamos los valores dentro de las funciones se llaman PARÁMETROS
    
}

//argumento
let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);
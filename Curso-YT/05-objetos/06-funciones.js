

function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length); // cantidad de argumentos de una funcion


// tener una funcion y asignársela a una variable 
const U = Usuario
let user = new U('Sara');

console.log(user);

//pasar las funciones como argumentos

function of(Fn, arg) { // of recive una funcion constructora
    return new Fn(arg);
}

let user1 = of(Usuario, 'SG');
console.log(user1);

// retornar dentro de otras funciones
function returned() {
    return function (){ //funcion anónima, pero tambien se le puede poner nombre
        console.log('Hola');
    }
}

let saludo = returned();
saludo();

const autenticado = false;
const puedePagar= false;

//console.log(autenticado && puedePagar ? 'Si puede pagar' : 'no puede pagar');
//console.log(autenticado || puedePagar ? 'Si puede pagar' : 'no puede pagar');

// if anidado en ternario
console.log(autenticado ? puedePagar ? 'Si esta autentidado y puede' : 'Si autenticado, no puede' : 'no puede pagar');


const sym = Symbol('1');
const sym2 = Symbol('1');

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

// Agregar nombre y apellido con llaves del objeto
persona[nombre] = 'Juan'
persona[apellido] = 'Gonzalez'
persona.tipoCliente = 'Premium'
persona.saldo = 500

console.log(persona)
 
// Definir una descripcion del symbol
const nombreCliente = Symbol('Nombre del cliente')
const cliente =  {}

cliente[nombreCliente] = 'Pedro'
console.log(cliente)
console.log(cliente[nombreCliente])
console.log(nombreCliente)
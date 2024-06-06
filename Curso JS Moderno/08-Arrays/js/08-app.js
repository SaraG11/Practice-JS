const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// forma antigüa
/*const nombre = producto.nombre;
console.log(nombre);*/

// extrae el valor d euna propiedad del objeto DESTRUCTURING
const { nombre, precio } = producto;
console.log(nombre);

// destructuring con Arreglos
const numeros = [10, 20, 30, 40, 50];

//const [primero, segundo, tercero] = numeros;
//otra forma, de acuerdo al valor que se requiera extraer y si no se requiere se deja en blanco
//const [ primero, , tercero] = numeros;
//console.log(tercero);
//console.log(primero);

//obtener un arreglo independiente 
const [ primero, ...tercero] = numeros;
console.log(tercero);
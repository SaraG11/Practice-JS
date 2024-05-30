const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// forma antigüa
/*const nombre = producto.nombre;
console.log(nombre);*/

// extrae el valor d euna propiedad del objeto DESTRUCTURING
const { nombre, precio } = producto; // se puede extraer mas propiedades siempre y cuando existan en el objeto

//const { precio } = producto;
console.log(precio);
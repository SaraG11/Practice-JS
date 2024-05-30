// un objeto no puede reescribirse, pero sus propiedades si

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// eliminar una propiedad de un objeto 

delete producto.precio;

console.log(producto);


// como hacer constante a una propiedad de un objeto
"use strict"; //exige que se cumplan ciertas reglas

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Metodos para objetos (OBject Methods)

//diferencia es que no se pueden agregar ni eliminar propiedades, pero sise pueden modificar las existentes
Object.seal(producto);

producto.disponible = false;
//producto.imagen = "img.jpg";
//
//delete producto.precio;

console.log(producto);

console.log(Object.isSealed(producto));


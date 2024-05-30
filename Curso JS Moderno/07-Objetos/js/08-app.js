// como hacer constante a una propiedad de un objeto
"use strict"; //exige que se cumplan ciertas reglas

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Metodos para objetos (OBject Methods)
Object.freeze(producto);

//no permite crear , ni modificar propiedades
//producto.disponible = false;
//producto.imagen = "img.jpg";
//
//delete producto.precio;

//console.log(producto);

// nos dice si el objeto esta congelado
console.log(Object.isFrozen(producto));



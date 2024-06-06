//arreglo con objeto
const carrito = [
    {nombre: 'Monitor 27 pul', precio: 600},
    {nombre: 'Celular', precio: 400},
    {nombre: 'computadora', precio: 700},
    {nombre: 'Mouse', precio: 100},
    {nombre: 'TV', precio: 300},
    {nombre: 'Tablet', precio: 200},
]


//Array method
const nuevoArreglo = carrito.forEach( function(producto){
    return `${producto.nombre} - Precio: ${producto.precio }`;
})

// map
const nuevoArreglo2 = carrito.map( function(producto){
    return `${producto.nombre} - Precio: ${producto.precio }`;
})

console.log(nuevoArreglo);

console.log(nuevoArreglo2);

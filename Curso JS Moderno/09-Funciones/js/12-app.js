//arreglo con objeto
const carrito = [
    {nombre: 'Monitor 27 pul', precio: 600},
    {nombre: 'Celular', precio: 400},
    {nombre: 'computadora', precio: 700},
    {nombre: 'Mouse', precio: 100},
    {nombre: 'TV', precio: 300},
    {nombre: 'Tablet', precio: 200},
]

// map
const nuevoArreglo2 = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio }`);

//Array method
carrito.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio }`));


//console.log(nuevoArreglo);

console.log(nuevoArreglo2);

//arreglo con objeto
const carrito = [
    {nombre: 'Monitor 27 pul', precio: 600},
    {nombre: 'Celular', precio: 400},
    {nombre: 'computadora', precio: 700},
    {nombre: 'Mouse', precio: 100},
    {nombre: 'TV', precio: 300},
    {nombre: 'Tablet', precio: 200},
]

// const numeros = [10, 15, 20, 25];

// numeros.forEach( function (mayor){
//     console.log(mayor)
// })

// iterador

// for(let i=0; i < carrito.length; i++){
//     console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio }` );
// }

//Array method
carrito.forEach( function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio }` );
})


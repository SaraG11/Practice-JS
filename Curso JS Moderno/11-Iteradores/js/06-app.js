// /ForEach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

/*si solo es una linea
pendientes.forEach( (pendiente) => console.log(pendiente))*/

pendientes.forEach( (pendiente, index) => {
    console.log(`${index}: ${pendiente}`);
})

//arreglo con objeto
const carrito = [
    {nombre: 'Monitor 27 pul', precio: 600},
    {nombre: 'Celular', precio: 400},
    {nombre: 'computadora', precio: 700},
    {nombre: 'Mouse', precio: 100},
    {nombre: 'TV', precio: 300},
    {nombre: 'Tablet', precio: 200},
]

//carrito.forEach( (producto) => {
//    console.log(producto.nombre);
//})

// diferencia entre map y foreach

const nuevoArreglo = carrito.forEach(producto  => producto.nombre);//undefined porque es nuevo arreglo vacio


const nuevoArreglo2 = carrito.map(producto  => producto.nombre);// se usa map y crea el nuevo arreglo con el ya existente

console.log(nuevoArreglo2);
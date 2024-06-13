const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

//arreglo con objeto
const carrito = [
    {nombre: 'Monitor 27 pul', precio: 600},
    {nombre: 'Celular', precio: 400},
    {nombre: 'computadora', precio: 700},
    {nombre: 'Mouse', precio: 100},
    {nombre: 'TV', precio: 300},
    {nombre: 'Tablet', precio: 200},
]

for(let pendiente of pendientes){
    console.log(pendiente)
}

for(let producto of carrito){
    console.log(producto.precio);
}
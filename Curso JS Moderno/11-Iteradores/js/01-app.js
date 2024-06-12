
/*for(let i=0; i <= 10; i++){
    console.log(`Numero ${i}`);
}*/

/*for(let i=0; i<20; i++){
    if(i % 2 == 0){
        console.log('Es numero par');
    }else{
        console.log('Es numero impar');
    }
}*/

const carrito = [
    {nombre: 'Monitor 27 pul', precio: 600},
    {nombre: 'Celular', precio: 400},
    {nombre: 'computadora', precio: 700},
    {nombre: 'Mouse', precio: 100},
    {nombre: 'TV', precio: 300},
    {nombre: 'Tablet', precio: 200},
]

console.log(carrito.length);

for(let i=0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}
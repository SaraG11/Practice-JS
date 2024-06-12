
for(let i=0; i <= 10; i++){
    if(i === 5){
        console.log('CINCO');
        //break;
        continue;
    }
    console.log(`Numero ${i}`);
}

const carrito = [
    {nombre: 'Monitor 27 pul', precio: 600},
    {nombre: 'Celular', precio: 400},
    {nombre: 'computadora', precio: 700, descuento: true},
    {nombre: 'Mouse', precio: 100},
    {nombre: 'TV', precio: 300},
    {nombre: 'Tablet', precio: 200},
]

console.log(carrito.length);

for(let i=0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre); 
}
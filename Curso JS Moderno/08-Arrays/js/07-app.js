const carrito = [];
//definir un producto
const producto ={
    nombre: "Monitor 35 p",
    precio: 400
}
const producto2 ={
    nombre: "Celular",
    precio: 2000
}

const producto3 ={
    nombre: "Teclado",
    precio: 500
}

const producto4 ={
    nombre: "tv",
    precio: 600
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);

/*esto agrega al producto al inicio del arreglo
carrito.unshift(producto3);
console.table(carrito);

//eliminar ultimo elemento de un arreglo 

carrito.pop();
console.table(carrito);

//eliminar del inioio dela rreglo
carrito.shift();
console.table(carrito);*/
//eliminar cualquier elemento 
carrito.splice(1, 1);
console.table(carrito);
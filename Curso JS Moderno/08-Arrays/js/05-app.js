// metodos en arreglos
const meses = ['Enero', 'Febrero', 'Marzo'];

//meses[3]= "Abril";
//agregar al final del arreglo, sin concoer la extension del arrelo
meses.push('Abril');

//console.table(meses);

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

carrito.push(producto);
carrito.push(producto2);

const producto3 ={
    nombre: "Teclado",
    precio: 500
}

//esto agrega al producto al inicio del arreglo
carrito.unshift(producto3);
console.table(carrito);

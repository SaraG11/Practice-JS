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

// forma oimperartiva
let resultado = [...carrito, producto];

resultado = [...carrito, producto2];


console.table(resultado);
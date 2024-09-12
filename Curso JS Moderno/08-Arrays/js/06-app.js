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
    nombre: "Teclado 2.9",
    precio: 400
}

// forma oimperartiva
let resultado = [...carrito, producto];

resultado = [...carrito, producto2];

//remplazar el unshift
resultado = [producto3, ...resultado ];

resultado = [...resultado, producto4 ];

console.table(resultado);
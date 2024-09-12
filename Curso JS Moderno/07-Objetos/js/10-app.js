const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso : '1kg',
    medida: '1m'
}

// Unir dos objetos

// console.log(producto);
// console.log(medidas);

const resultado = Object.assign(producto, medidas);


// Spread Operator o Rest Operator
//los tres puntos, dice que copie todo lo que esta en producto
const resultado2 = {...producto, ...medidas}

// console.log(resultado);
console.log(resultado2);
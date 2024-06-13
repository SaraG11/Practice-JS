const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// forma convencional 
meses.forEach( (mes, index)=> {
    if(mes === 'Abril'){
        console.log(`Fue encontrado en el indice ${index}`)
    }
});

//encontrar el indice de abril 
const index = meses.findIndex( mes => mes === 'Abril');
console.log(index)

// arreglo de objetos 
const result = carrito.findIndex( articulo => articulo.nombre === 'Televisión');
console.log(result)
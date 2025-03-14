const carrito = new Set();
carrito.add('Camisa')
carrito.add('Sudadera')
carrito.add('Disco #1')
carrito.add('Disco #2')


console.log(carrito.delete('Disco #2'))
console.log(carrito.has('Guitarra'))

carrito.forEach( producto => {
    console.log(producto)
})

console.log(carrito.size)
console.log(carrito)

// Del siguiente arreglo elimina los duplicados
const numeros = [10, 20, 30, 30, 10, 40, 50]

const noDuplicados = new Set(numeros);
console.log(noDuplicados)
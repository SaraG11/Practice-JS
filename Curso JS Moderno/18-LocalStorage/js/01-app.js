localStorage.setItem('nombre', 'sara')

// objetos con local storage

const producto = {
    nombre: "Monitor",
    precio: 3000
}

const productoString = JSON.stringify( producto );
console.log(productoString)
localStorage.setItem('productos', productoString)

let productos = localStorage.getItem( 'productos')
console.log(JSON.parse(productos))

const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));

// Obtener datos de localstorage

// let mesesObtener = localStorage.getItem('meses');
// console.log(mesesObtener)

// eliminar elementos
localStorage.removeItem('nombre')

// Actualizar elementos
const mesesObtener =  JSON.parse(localStorage.getItem('meses')) //lo obtiene
console.log(mesesObtener)
mesesObtener.push('Nuevo Mes');
console.log(mesesObtener)
localStorage.setItem('meses', JSON.stringify(mesesObtener))

localStorage.clear();

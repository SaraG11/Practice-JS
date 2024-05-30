
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        //la palabra this refiere a los valores que existen en el mismo objeto 
        console.log(`El producto: ${this.nombre} tiene un precio de: $${this.precio}`)
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 500,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: $${this.precio}`)
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();

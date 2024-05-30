const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion : {
        medidas :{
            peso: '1kg',
            medida: '1m'
        }
    },
    fabricacion: {
        pais: 'China',
    }
}

/*const { nombre } = producto;
console.log(nombre);*/

//extraer infoirmacion con DESTUCTIORING
const {informacion, fabricacion} = producto;
const {nombre, informacion: { medidas: { medida }}} = producto;
console.log(pais);
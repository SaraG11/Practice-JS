const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

const automovil= {
    modelo: 'camaro',
    year: 1969,
    motor: '6.8'
}

for(let propiedad in automovil){
    console.log(`${automovil[propiedad]}`)
}

for(let [llave, valor] of Object.entries(automovil)){
    console.log(valor)
    console.log(llave)
}

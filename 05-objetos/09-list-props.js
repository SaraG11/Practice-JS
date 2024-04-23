const punto = {
    x: 10,
    y: 15,
    //metoddo se puede definir dibujar()
    dibujar: function() {
        console.log('dibujando');
    }
};

//delete punto.dibujar;
if('dibujar' in punto){ // if in verifica si un objeto tiene alguna propiedad 
    punto.dibujar();
}

//console.log(Object.keys(punto));
for (let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
}

// Con esto se puede acceder a las propiedad de un objeto cuando no conocemos sus propiedades. 
for (let entry of Object.entries(punto)){
    console.log(entry);
}

//version mas nueva que es lo mismo que las dos de arriba
for (let llave in punto){
    console.log(llave, punto[llave]);
}
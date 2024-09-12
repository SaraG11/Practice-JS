const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id ${id}`)
    },
    pausar: function(){
        console.log('Pausando...')
    },
    borrar: function(id){
        console.log(`Borrando cancion... ${id}`)
    },
    crearplaylist: function(nombre){
        console.log(`Creando playlist de ${nombre}`)
    },
    reproducirplaylist: function(nombre){
        console.log(`Reproduciendo platylist...${nombre}`)
    }
}

/*otra manera de reallizar el metodo de propiedad 
reproductor.borrar = function(id){
    console.log('Borrando cancion...')
}*/

// 1 crear una playlist y otro de reproducir una playlist

//reproductor.reproducir(30)
//reproductor.reproducir(10)
//reproductor.pausar();
//reproductor.borrar(30);
reproductor.crearplaylist('Rock 90s');
reproductor.reproducirplaylist('Rock 90s');
 
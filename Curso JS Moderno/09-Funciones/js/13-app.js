const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
    //aqui no tiene ningun parámetro
    pausar: () =>  console.log('Pausando...'),
    borrar: id =>  console.log(`Borrando cancion... ${id}`),
    crearplaylist: nombre => console.log(`Creando playlist de ${nombre}`),
    reproducirplaylist: nombre => console.log(`Reproduciendo platylist...${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}

// forma para utilizar set y get 
reproductor.nuevaCancion = 'Enter Sadman';
reproductor.obtenerCancion // en get no necesita agregar el parentesis


// reproductor.crearplaylist('Rock 90s');
// reproductor.reproducirplaylist('Rock 90s');
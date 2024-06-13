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

/* ejercicio

function areaPoligono(figura, altura, base){
    //altura= 9;
    //base= 10;
    if(figura == 'Triangulo'){
        areaTotal = (base * altura) / 2;
        return console.log(`El area del ${figura} es de ${areaTotal}`);
    }else if(figura == 'Cuadrado'){
        areaTotal = altura * altura;
        return console.log(`El area del ${figura} es de ${areaTotal}`);
    }else if(figura == 'Rectangulo'){
        areaTotal = base *altura;
        return console.log(`El area del ${figura} es de ${areaTotal}`);
    }else{
        console.log('Error de poligono soportado');
    }
}

areaPoligono('Cuadrado', 8, 6);*/
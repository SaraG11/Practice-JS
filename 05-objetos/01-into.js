let user = {
    email: 'gpsara@gmail.com',
    name: 'Sara',
    direccion: {
        calle: 'Queen st',
        numero: 15,
    },
    activo: true, //propiedad de tipo boolean
    recuperarClave: function (){ // funcion sin nombre se le conoce como funcion anonima
        console.log('Recuperando clave...');
    } 
};
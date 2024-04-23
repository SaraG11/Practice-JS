// FUNCIONES CONSTRUCTORAS
// Objeto es {id: 1, recuperarClave: function(){} }

function Usuario(){ //es necesario usar UpperCamelCase, nombre de la funcion con la primera letra en mayúscula 
    this.id = 1;
    this.recuperarClave = function(){ //metodos: una funcion que fue asignada a una propiedad de un objeto
        console.log('recueprar clave...')
    }
}

let usuario = new Usuario();
console.log(usuario);

function crearUser(name, email){ // es necesario usar camelcase, nombre de la funcion con la primera letra en minuscula
    return {
        email: email,
        name, // es lo mismo a que si ponemos el name: name solo si tienen el mismo nombre de la variable con la constante
        activo: true, 
        recuperarClave: function (){ 
            console.log('Recuperando clave...');
        } 
    };
}

let user1 = crearUser('Sara', 'sarag@gmail.com');
let user2 = crearUser('Nayeli', 'nayeli1@gmail.com');

console.log(user1, user2);
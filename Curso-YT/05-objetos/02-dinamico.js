const user = { id: 1}; // no se puede cambiar el valor pero si se puede agregar 

user.name = 'Sara';
user.guardar = function(){
    console.log('Guardando', user.name);
}

user.guardar();

//eliminar las propiedades que ya tiene

delete user.name;
delete user.guardar;
console.log(user);

//no se puede modificar un objeto ya creado, ni sus propiedades ni sus valores
/**const user1 = Object.freeze({ id: 1});
user1.name = 'SG';
console.log(user1);
*/


//cambiarle las propiedades pero no agregarle ni quitarle 
const user1 = Object.seal({ id: 1});
user1.name = 'SG';
user1.id = 2;
console.log(user1);

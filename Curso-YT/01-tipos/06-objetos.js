//personaje de tv
let nombre = 'Pedro';
let anime = "Demon Slayer";
let edad = 25;

let personaje = {
    //par llave-valor o propiedad
    nombre: "Pedro",
    anime: "Demon Slayer",
    edad: 16,
}; //esto es un objeto literal solo con esta sintaxis
console.log(personaje);
console.log(personaje.edad); // ver propiedades específicas
//segunda manera para acceder a las propiedades de un objeto
console.log(personaje['nombre']); // indicando con comillas simples o dobles

//modificar propiedades
personaje.edad = 15;
personaje['edad'] = 14;

let llave = 'edad';
personaje[llave] = 14;

//eliminar una propiedad
delete personaje.anime;
console.log(personaje);
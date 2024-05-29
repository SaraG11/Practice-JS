const producto = 'Monitor 20 pulgadas';

// . repet te va a permitir repetir una cadena de text ...

const texto = ' en Promocion'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// .split dividir un string

const actividad = "Estoy aprendiendo JS moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprende a programar';
console.log(hobbies.split(", "));

const tweet = "Apendiendo JS #JSModerno";
console.log(tweet.split('#'));
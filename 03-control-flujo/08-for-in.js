
let user = {
    id: 1,
    name: 'Juan perez',
    age: 25,
};

for (let prop in user){
    console.log(prop, user[prop]);
}

let animales = ['Perro', 'gato', 'dragon'];

for (let indice in animales){
    console.log(indice, animales[indice]);
}
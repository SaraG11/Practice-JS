const card = document.querySelector('.card');

console.log(card);

// podemos tener selectores especificos
const info = document.querySelector('.premium .info');

console.log(info);

// sleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard)

// seleccionar el rfomulario (clase)
const formulario = document.querySelector('#formulario');
console.log(formulario)

// seleccionar elementos por etiqueta html
const navegacion = document.querySelector('nav');
console.log(navegacion)
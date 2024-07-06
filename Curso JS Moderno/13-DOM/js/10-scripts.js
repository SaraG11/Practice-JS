

const enlace = document.createElement('a');

// agregandole el texto
enlace.textContent = 'Nuevo enlace';
// añadiendo href
enlace.href = '/nuevo-enlace';


// console.log(enlace)

// enlace.onclick = miFuncion;

// seleccionar la navegacion
const navegacion = document.querySelector('.navegacion')
// navegacion.appendChild(enlace)
// console.log(navegacion.children)
navegacion.insertBefore(enlace, navegacion.children[1])

// function miFuncion(){
//     alert('Diste click')
// }

// crear un card de forma dinamica

const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Concierto ROCK'
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('p')
parrafo3.textContent = '800 por persona'
parrafo3.classList

console.log(parrafo1)
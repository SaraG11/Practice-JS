

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
parrafo3.classList.add('precio');

// crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

// crear imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
// crear el card
const card = document.createElement('div')
card.classList.add('card');

// asignar la imagen
card.appendChild(imagen)

// asignar info
card.appendChild(info)

// insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);
contenedor.insertBefore(card, contenedor.children[0])
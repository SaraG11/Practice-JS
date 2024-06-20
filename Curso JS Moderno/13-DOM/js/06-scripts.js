
const encabezado = document.querySelector('.contenido-hero h1').textContent;// encadenamiento
console.log(encabezado)



// maneras para seleccionar contenido

// console.log(encabezado.innerText); // si en el css - visibility: hidden; no lo va a encontrar
// console.log(encabezado.textContent);
// se trae todo el html
// console.log(encabezado.innerHTML)


// Agragar nuevo texto a un elemento
// document.querySelector('.contenido-hero h1').textContent = 'Nuevo heading'

// tambien se puede agregar de la siguiente manera
/*const nuevoHead= 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHead;*/

const imagen = document.querySelector('.card img')
imagen.src = 'img/hacer2.jpg';




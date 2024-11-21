// variables 

const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos') 
// variable que almacenara el carrito de compras 
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    // cuando agregas un curso, presionando el boton agregando al carrito
    listaCursos.addEventListener('click', agregarCurso)

    // Eliminar cursos del carrito 
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () =>{
        articulosCarrito = []; // reseteamos el arreglo
        clearHTML(); // eliminamos todo el html
    })

}

// funciones
function agregarCurso(e){
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatos(cursoSeleccionado);
        
    }
}

// Elimina un curso del carrito
function eliminarCurso(e){
    console.log(e.target.classList)
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        // Elimnina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
        // console.log(articulosCarrito);
        carritoHTML(); // volvemos a iterar sobre el carrito y mostrar el html
    }
}

// funcion leer contenido del html y extraer la informacion
function leerDatos(curso){
    // console.log(curso);
    // crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){
        // actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; //retorna el objeto actualizado
            }else{
                return curso; // y este retorna los objetos que no sonm los duplicados
            }
        });
        articulosCarrito = [...cursos]
    }else{
        // Agregar elementos al arregblo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso]
    }

    console.log(articulosCarrito)

    carritoHTML();

}

// muestra el carrito de compras en el html
function carritoHTML(){
    // limpiar HTML
    clearHTML();

    // recorre el carrito y genera el html 
    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;
        // agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

// Elimina los cursos del tbody
function clearHTML(){
    // contenedorCarrito.innerHTML = '';
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
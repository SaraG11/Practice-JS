// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max -10;

// Generar un OBJETO con la busqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : ''
}


document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos(autos);
    // Llena las opciones de años
    llenarSelect();
})

// Event listener para los select de busqueda
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;
    filtratAuto();
});
year.addEventListener('change', e =>{
    datosBusqueda.year = parseInt(e.target.value);
    filtratAuto();
});
minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value;
    console.log(datosBusqueda)
    filtratAuto();
});
maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value;
    filtratAuto(); 
});
puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = e.target.value;
});
transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;
});
color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
});

// funciones
function mostrarAutos(autos){
    limpiarHtml(); //elimina el HTML previo
    autos.forEach( auto =>{

        const {marca, modelo, year, precio, puertas, color, transmicion} = auto;
        const autoHTML = document.createElement('P');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - Precio: $${precio} ${puertas} Puertas - Color: ${color} ${transmicion}
        `;

        // Insertar en el HTML
        resultado.appendChild(autoHTML);
    })
}

// Limpiar HTML 
function limpiarHtml(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
        console.log(resultado)
    }

}

// Genera los años del select
function llenarSelect(){
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // agrega las opciones de año al select
    }
}

// Funcion que filtra en base a la busqueda 
function filtratAuto(){
    const resultado = autos.filter( filtrarMarca ).filter(filtrarYear).filter( filtrartMinimo).filter( filtrartMaximo )
    // console.log(resultado)
    mostrarAutos(resultado)
}

function filtrarMarca(auto){
    const { marca } = datosBusqueda;
    if( marca){
        return auto.marca === marca;
    }
    return auto;
}
function filtrarYear(auto){
    const { year } = datosBusqueda;
    // console.log(year)
    if( year){
        return auto.year === year;
    }
    return auto;
}
function filtrartMinimo(auto){
    const { minimo } = datosBusqueda;
    // console.log(min);
    if( minimo ){
        return auto.precio >= minimo;
    }
    return auto;
}
function filtrartMaximo(auto){
    const { maximo } = datosBusqueda;
    // console.log(min);
    if( maximo ){
        return auto.precio <= maximo;
    }
    return auto;
}
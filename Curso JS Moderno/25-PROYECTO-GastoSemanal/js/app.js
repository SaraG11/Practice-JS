// Variables y selectores
const formulario = document.querySelector('#agregar-gasto')
const gastoListado = document.querySelector('#gastos ul')

// Eventos
eventListers();

function eventListers(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto)
}

// Clases
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
    nuevoGasto(gasto){
        this.gastos = [ ...this.gastos, gasto]
        this.calcularRestante();

    }

    calcularRestante(){
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0)
        this.restante = this.presupuesto - gastado;

        console.log(this.restante)
    }
}

class UI{
    insertarPresupuesto(cantidad){
        const { presupuesto, restante } = cantidad; // Extraemos el valor

        // Los agregamos al html
        document.querySelector('#total').textContent = presupuesto; 
        document.querySelector('#restante').textContent = restante;
    }

    imprimiAlerta(mensaje, tipo){
        // crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert')

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger')
        }else{
            divMensaje.classList.add('alert-success')
        }

        // mensaje de error
        divMensaje.textContent = mensaje;

        // insertamos en el html
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // quitar del html
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);

    }

    agregarGastoListado(gastos){
        clearHTML();
        // iterar sobre los gastos
        gastos.forEach(gasto => {

            const { cantidad, nombre, id} = gasto;

            // crear li
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            // nuevoGasto.setAttribute('data-id', id)
            nuevoGasto.dataset.id = id;

            // agregar el html del gasto
            nuevoGasto.innerHTML = ` ${nombre} <span class="badge badge-primary badge-pill"> $${cantidad} </span>`;

            // boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times';

            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar)

            // agregar al html 
            gastoListado.appendChild(nuevoGasto);

        });

    }
    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto( presupuestoObj ){
        const { presupuesto, restante } = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');

        // comprobrobar 25%
        if ((presupuesto / 4 ) > restante ){
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger')
        }else if(( presupuesto / 2) > restante){
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning')
        }

        // Si el presupuesto es 0 o menor
        if(restante <= 0){
            ui.imprimiAlerta('El presupuesto se ha agotado', 'error');

            formulario.querySelector('button[type="submit"').disablded = true;
        }
    }

}

// Instancias
const ui = new UI()
let presupuesto;

// Funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    console.log( Number(presupuestoUsuario))
    if(presupuestoUsuario === ''|| presupuestoUsuario === 'null' || isNaN(presupuestoUsuario || presupuestoUsuario <= 0)){
        window.location.reload();
    }
    // Presupuesto validado, instanciando la clase de Presupuesto
    presupuesto = new Presupuesto(presupuestoUsuario)
    console.log(presupuesto)

    ui.insertarPresupuesto(presupuesto)
}

// Añade gastos
function agregarGasto(e){
    e.preventDefault();
    // leer datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    // validar
    if( nombre === '' || cantidad === ''){
        ui.imprimiAlerta('Ambos campos son obligatorios', 'error');

        return;

    }else if( cantidad <= 0 || isNaN(cantidad)){
        ui.imprimiAlerta('Cantidad inválida', 'error');
        return;
    }

    console.log('Agregando gastos...')

    // Objeto con el gasto
    const gasto = { nombre, cantidad, id: Date.now() }

    // añade un nuevo gasto
    presupuesto.nuevoGasto( gasto );
    ui.imprimiAlerta('Gasto agregado correctamente')

    // Imprimir los gastos
    const { gastos, restante } = presupuesto;
    ui.agregarGastoListado( gastos)

    ui.actualizarRestante( restante )

    ui.comprobarPresupuesto( presupuesto )

    // Reinicia el formulario
    formulario.reset();
    
}

// Limpiar HTML
function clearHTML(){
    while(gastoListado.firstChild){
        gastoListado.removeChild(gastoListado.firstChild)
    }
}

function eliminarGasto(id){
    console.log('eliminando', id)
}
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
    // Presupuesto validado
    presupuesto = new Presupuesto(presupuestoUsuario)
    console.log(presupuesto)

    ui.insertarPresupuesto(presupuesto)
}

// Añade gastos
function agregarGasto(e){
    e.preventDefault();
    // leer datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    // validar
    if( nombre === '' || cantidad === ''){
        ui.imprimiAlerta('Ambos campos son obligatorios', 'error');

        return;

    }else if( cantidad <= 0 || isNaN(cantidad)){
        ui.imprimiAlerta('Cantidad inválida', 'error');
        return;
    }

    console.log('Agregando gastos...')
}
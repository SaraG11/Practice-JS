function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Prototype
Cliente.prototype.tipoCliente = function(){
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold'
    }else if(this.saldo > 5000){
        tipo = 'Platinum'
    }else{
        tipo = 'Normal'
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo es: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retiro){
    this.saldo -= retiro
}

function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono;
}

Persona.prototype = Object.create( Cliente.prototype );
Persona.prototype.constructor = Cliente;
// Instanciarlo 
const persona1 = new Persona('Sara', 5000, 77728351)
console.log(persona1)

Persona.prototype.mostrarTelefono = function(){
    return `El telefono de esta persona es ${this.telefono}`;
}
console.log(persona1.mostrarTelefono())
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const user1 = new Cliente('Jose', 500);

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(user1));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const SN = new Empresa ('Sara G', 10000, 'autos');
console.log(formatearCliente(SN));
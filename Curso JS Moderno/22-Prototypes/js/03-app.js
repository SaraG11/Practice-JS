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

// Instanciarlo
const user1 = new Cliente('Jose', 7000);
console.log(user1.tipoCliente());
console.log(user1.nombreClienteSaldo());

user1.retiraSaldo(1000)
console.log(user1.nombreClienteSaldo());

console.log(user1);

// function Empresa(nombre, saldo, categoria) {
//     this.nombre = nombre;
//     this.saldo = saldo;
//     this.categoria = categoria;
// }

// const SN = new Empresa ('Sara G', 10000, 'autos');
// console.log(SN);
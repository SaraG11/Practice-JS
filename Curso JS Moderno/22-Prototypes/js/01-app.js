
// Object Literal

const cliente = {
    nombre: "Juan",
    saldo: 300
}
console.log(cliente)
// Object Constructor

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const user1 = new Cliente('Jose', 500);
console.log(user1);
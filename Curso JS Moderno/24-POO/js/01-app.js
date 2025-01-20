class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
    return `Cliente: ${this.nombre} Saldo: ${this.saldo}`
    }

    static bienvenida(){
        return `Bienvenido al cajero`
    }
}

const sg = new Cliente('Juan', 400);
console.log(sg.mostrarInformacion())
console.log(sg)

console.log(Cliente.bienvenida())

const Cliente2 = class{

}
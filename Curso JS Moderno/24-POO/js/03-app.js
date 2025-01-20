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

// HERENCIA
class Empresa extends Cliente{
    constructor(nombre, saldo, tel, categoria){
        super(nombre, saldo)
        this.tel = tel;
        this.categoria = categoria;
    }
    static bienvenida(){
        return `Bienvenido al cajero de empresas`
    }

}

const sg = new Cliente('Juan', 400);
const empresa =  new Empresa('Ramon', 600, 77384, 'Curso en linea');
console.log(empresa)

console.log(Empresa.bienvenida())
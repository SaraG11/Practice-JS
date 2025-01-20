class Cliente{

    #nombre;
    /*constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
    return `Cliente: ${this.#nombre} Saldo: ${this.saldo}`
    }

    static bienvenida(){
        return `Bienvenido al cajero`
    }*/

    setNombre(nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        return this.#nombre;
    }

}

// const persona = new Cliente('Juan', 200);
// const persona = new Cliente('Juan', 200)
// console.log(persona.mostrarInformacion())

const persona = new Cliente();
persona.setNombre('Pedro')
console.log(persona.getNombre())
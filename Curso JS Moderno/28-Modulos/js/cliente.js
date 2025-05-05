export const nombreCliente  = 'Juan';
export const saldo = 200;

export function mostrarInfo(nombre, saldo){
    return `Cliente: ${nombre } - Ahorro: ${saldo}`
}

export function imprimirSaldo(ahorro){
    if( ahorro > 0){
        console.log('Si tiene saldo')
    }else{
        console.log('El cliente no tiene saldo')
    }
}

export class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInfo(){
        return `Cliente: ${this.nombre } - Ahorro: ${this.saldo}`
    }
}

export default function nuevaFuncion(){
    console.log('Este es el export Default')
}
import { Cliente } from './cliente.js';

export class Empresa extends Cliente{
    constructor(nombre, saldo, categoria){
        super(nombre, saldo)
        this.categoria = categoria
    }
    mostrarInfo(){
        return `Cliente: ${this.nombre } - Ahorro: ${this.saldo} - Categoria: ${this.categoria}`
    }
}
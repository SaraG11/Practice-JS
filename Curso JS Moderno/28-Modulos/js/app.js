import nuevaFuncion, { nombreCliente, saldo, mostrarInfo, imprimirSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

nuevaFuncion();

console.log(nombreCliente)
console.log(saldo)
console.log(mostrarInfo (nombreCliente, saldo))

imprimirSaldo(saldo)

const cliente = new Cliente(nombreCliente, saldo)
console.log(cliente.mostrarInfo())

// Importar empresa
const empresa = new Empresa('SG', 100, 'Aprendiendo en linea');
console.log(empresa.mostrarInfo()) 
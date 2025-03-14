
const cliente = new Map();

cliente.set('nombre', 'Karen')
cliente.set('tipo', 'Premium')
cliente.set('saldo', 3000)


console.log(cliente.size)
console.log(cliente.has('nombre'))
console.log(cliente.get('nombre'))

cliente.delete('saldo')
console.log(cliente.has('saldo'))

cliente.clear()
console.log(cliente)

const paciente = new Map([ ['nombre', 'paciente'], ['cuarto', 'no definido']])
paciente.set('dr', 'Perez')
paciente.set('nombre', 'Juan')
console.log(paciente)

paciente.forEach((datos, index) => {
    // console.log(datos)
    console.log(index)
})
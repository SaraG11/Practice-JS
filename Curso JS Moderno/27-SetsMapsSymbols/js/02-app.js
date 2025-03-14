// WeakSet

const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    edad: 18
}

weakset.add(cliente)

console.log(weakset)
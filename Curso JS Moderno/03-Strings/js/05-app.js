const producto = 'Monitor 20 pulgadas';

//reemplazar el texto de una cadena
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

//extraer/cortar una parte de una cadena de texto
console.log(producto.slice(0, 10));
//console.log(producto.slice(8));

//no se puede ser el nprimer numero mayor que el segundo
console.log(producto.slice(2,1));

//alternativa a slice
console.log(producto.substring(0, 10));

// la diferencia entre slice y substring es que el segundo será mas inteligente ya que ordena el error de slice
console.log(producto.substring(2,1));

const usuario = 'Sara';
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));

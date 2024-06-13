const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octumbre', 'Noviembre', 'Diciembre'];

// con .concat
const anio = meses.concat(meses2, meses3);
console.log(anio)

//  spread operator: el orden en el que se pasan los valores es importante 
const resultado2 = [...meses, ...meses2];
console.log(resultado2);
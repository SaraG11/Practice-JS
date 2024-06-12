

const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 1000;

if (efectivo > totalPagar ){
    console.log('Si podemos pagar');
}else{
    console.log('Fondos insuficientes');
}
  
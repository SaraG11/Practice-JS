//operadoer mayor que y menor que

const dinero = 300;
const totalApagar = 500;
const tarjeta = false;

if (dinero >= totalApagar){
    console.log('Si podemos pagar');
}else if(tarjeta){
    console.log('Si puedo pagar porque hay tarjeta');
}else{
    console.log('Sin fondos');
}
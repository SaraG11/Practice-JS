const usuario = true;
const puedePagar = false;

if (usuario && puedePagar){
    console.log('si puedes comprar');
}else if(!usuario && !puedePagar){
    console.log('No puedes comprar');
}else if(!usuario){
    console.log('Inicia sesion o crea una cuenta');
}else if(!puedePagar){
    console.log('Fondos insuficientes');
}
const aplicarDesc = new Promise ( (resolve, reject) => {
    const descuento = true;

    if(descuento){
        resolve('Descuento aplicado')
    }else {
        reject('No se pudo aplicar el descuento')
    }

})
 
aplicarDesc.then(resultado =>{
    console.log(resultado)
})
.catch( error => {
    console.log(error)
})
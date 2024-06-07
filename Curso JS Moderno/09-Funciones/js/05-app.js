function sumar(a, b){ // a y b son parámetros de funcion
    console.log(a + b);
}

sumar(2, 3); // 2 y 3 son argumentos 

sumar( 200, 184);

function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}
saludar('Juan', 'GP');
saludar(); //se llama a la funcion, pero no muestra nada porque no le estamos pasando nuingun valor

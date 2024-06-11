const aprendiendo = function(tecnologia, tecnologia2){
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}

// parámetros en la funcion 
aprendiendo('Java Script', 'Node.js')

// parametros en los arrow function
// const aprendiendo2 = (tecnologia) => `Aprendiendo ${tecnologia}`; 
// si solo tiene un parametro en los arrow function no es necesario los paréntesis
// const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`; 

// si son dos paremtros si es necesario el paréntesis
const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;


console.log(aprendiendo2('JS', 'Node JS'));
function Punto(x, y){
    this.x = x;
    this.y = y;
    this.dibujar = function() { console.log('Dibujando ...') }
}

// tratar de no utilizar esta forma de funciones
/**
 * const Point = new Function('x', 'y', `
this.x = x;
this.y = y;
this.dibujar = function() { console.log('Dibujando ...') }
`);
 */

// sirve para poder extender objetos y extender otras funciones. 
let punto = { z: 7};
Punto.call(punto, 1, 2);// call permite llamar funciones a las cuales puedes llamar al contexto de this y aumentar los objetos que le estas pasando 
// {z: 7, x: 1, y: 2, dibujar: ƒ}dibujar: ƒ ()x: 1y: 2z: 7[[Prototype]]: Object

//Punto.apply(punto, [1, 2]);// hace lo mismo, solo que los argumentos se lo tienen que entregar con un array


console.log(punto);
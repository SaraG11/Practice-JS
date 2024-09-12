/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function countWords(txt){
    txt = txt.toLowerCase();
    txt = txt.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

    const palabras = txt.split(/\s+/);
    const countPalabras = {};

    for (let palabra of palabras){
        if(palabra){
            if(countPalabras[palabra]){
                countPalabras[palabra]++;
            }else{
                countPalabras[palabra] = 1;
            }
        }
    }
    // imprimir el recuentro de palabras desde el objeto
    for(let palabra in countPalabras){
        console.log(`La palabra: ${palabra} se repite ${countPalabras[palabra]} veces.`);
    }
}
const txt = "Hola, hola! Esto es un ejemplo. Pruebas del ejemplo";
countWords(txt);

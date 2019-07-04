var randomEven = () => new Array(Math.ceil(Math.random()*100))
                        .fill(0)
                        .map((_,i) => i) 
                        .filter(n => !Boolean(n%2)) /* Sería igual que .filter(n => n%2 === 0 ) */
                        .filter(n => n%2 === 0 )

/* .map((_,i) Así no coge el elemento, sólo el indice */

new Array(100) -> Crea un array de 100 números undefined
Para rellenarlo utilizamos .fill(0), todos los elementos seran 0 o ponemos un String, etc..
new Array(Math.ceil(Math.random()*100)) -> Crea un array de un número random

/*
El método forEach no devuelve NamedNodeMap,

Map devuelve un array con los resultados de la función

Filter devuelve un array con elementos que cumplen la condición

Every y some devuelva true/false, true si todos los elementos del array cumplen la condición

Some igual que every pero si alguno cumple ya devuelve true

Reduce : aplica una función recursivamente sobre un acumulador y sobre cada valor del array (de izquierda a derecha) hasta obtener un unico valor
*/

function sumElements(acc, current /*, index, array */) {
    //console.log(acc + ' | ' + current + ' | ' + index + ' | ' + array);
    return acc + current;
  };
  
  // Note elision, there is no member at 2 so it isn't visited
  >>> [2, 5, 3, 9].reduce(sumElements, 0);  -> 0 es el accumulador, si no se lo ponemos el valor es undefined
  19

//Generamos array de 20 elementos de 1 a 20
(new array(20)).fill(0).map(function(element, index){return index + 1})


/* ARROW FUNCTIONS */
function suma (a,b) {return a+b}
var suma = function  (a,b) {return a+b}


var suma = (a,b) =>  a+b
var double = a => a*2

var suma = (a,b) => {
    console.log("dos lineas de código")
    return a+b
} 
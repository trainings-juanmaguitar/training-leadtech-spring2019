new Array(Math.ceil(Math.random()*100))
    .fill(0)
    .map((_,i) => i)
    .filter(n => !Boolean(n%2))

//devuelve un array con 10 elementos con valor UNDEFINED
var myArray = new Array(10);

new Array(10).fill(0).map( function(element, index){ return index})
//Console (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


//20 elementos random en una array
new Array(20).fill(0).map( function(element, index){ return Math.round(Math.random()*100)})
//Console (20) [46, 9, 63, 99, 99, 71, 11, 85, 64, 47, 85, 34, 14, 34, 51, 87, 30, 100, 91, 12]

//funciones iguales
function sum(a,b){ return a+b};
var sum = function(a,b){ return a+b};
var sum = (a,b) => a+b;
var mulx2 = a => a*2; //Si solo tuviera un parámetro no necesita paréntesis


//foreach
var elements = ['Wind','Rain','Fire'];

elements.forEach( function(element,index,array){
    console.log("element - " + element);
    console.log("index - " + index);
    console.log("array - " + array);
})
/*foreach salida por consola
    element - Wind
    index - 0
    array - Wind,Rain,Fire
    element - Rain
    index - 1
    array - Wind,Rain,Fire
    element - Fire
    index - 2
    array - Wind,Rain,Fire
*/

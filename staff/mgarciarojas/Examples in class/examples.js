new.Array(Math.ceil(Math.random()*100))
.fill(0)
.map((_,i)=>i)
.filter(n => !Boolean(n%2))

//PAra crear arrrays de x positions
new Array (100);


(new Array(100)).fill(0).map(function (element, index) { return index} )
// creo un array de 100 posiciones con undefined, con fill lo relleno y pongo valor a todos los elementos 
// con map transformo el array y devuelvo uno que tenga como valor la posición.
(new Array(100)).fill(0).map(function (element, index) { return Math.random()*1000} )
//rellenará el array con elementos que sean numeor randoms entre 0 y 999.

//ARROW FUNCTIONS
// sintaxis mas cortas, funciones anónimas, 
var sum = function (a,b){ return a+b}
var sum = (a,b) => a+b
// si solo hay un argumento se puede no poner paréntesis
var double = a => a*2
// si tiene mas de un argumento los paréntesis son obligatorios
var sum = (a,b) => a+b
// si el cuero de la funcion contiene más de una línea
var double = a => {
    console.log("mandanguita")
    return a*2
}
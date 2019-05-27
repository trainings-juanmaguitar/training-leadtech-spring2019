var csv=`
name,surname,age
juan, martinez,34
marta,hola,5
`
csv.split('\n') //devolverá dos cadenas vacías
.filter (row => row ) // convertirá en booleano y devolverá solo los true
.slice(1) // para que nos deje la primera fila que es la cabecera fuera
.map(elem => elem.split(',')) // separamos cada elemento y generamos un  nuevo array con 3 elementos 
.filter((elem, index) => parseInt(elem [2],10)>30 ) // nos devolverá todas las filas menor que 30 de edad
.forEach(elem => console.log(`${elem[0]} ${elem[1]}`)) // nos devolverá el nombre y apellido
.some(elem => elem[0]==="paco") // si hay alguno que se llame paco
.every/(elemn => elem[2]>20 && elem[2]<40) // devovlerá true o false si se cumple que todos cumplen esa condicion
//Se puede encapsular la funcion que le pasas al map en una variable y luego pasársela.

var b = arg1 && 45 // si se cumple que arg1 devuelve true se le asigna 45.
var  a = a || 0 // si evalua a false se asignará 0
var [a,b,c=0] = [1,2] // a=1, b=2, c=0

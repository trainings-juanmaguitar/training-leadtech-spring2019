/**
 * randomLargest()
 * Aleatoriza tres números en el rango (0 .. 100) 
 * e imprime el más grande.
 */

 function randomLargest(){
     var aCompareNumbers = [];     
     for ( var i = 0; i < 3; i++){
        aCompareNumbers.push(Math.round(Math.random()*100));
        //console.log(aCompareNumbers); (Se ha dejado este comentario para ver en consola si hacía correctamente el cálculo)
     }
     return Math.max.apply(null, aCompareNumbers);
 }
 randomLargest();

 /**
  * randomEven()
  * Aleatoriza un número (rango 0..100), luego imprime todos los números 
  * pares desde 0 hasta el aleatorizado.
  */
 
 function randomEven(){
     var nRandomNumber = Math.round(Math.random()*100);
     var aResult = [];
     for (var i = 0; i <= nRandomNumber; i+=2){
         aResult.push(i);         
     }
     return "For max number: " + nRandomNumber + " this is a result: " + aResult;     
 }







/**
 * randomEven()
Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.
 */

function randomEven(){
   var aEvenNumbers=[];
   var nFinnishNumber=Math.floor(Math.random() * 101); 
   var sAllevenNumbers=''
   for (var i=0; i<=nFinnishNumber;i++){
       
    if (i%2==0) aEvenNumbers.push(i)

   }

   aEvenNumbers.forEach(function (number){
    sAllevenNumbers+=" "+number 
   })
   return sAllevenNumbers
 }
 var randomEven = () => new Array (Math.ceil(Math.random()*100))
 .fill(0)
 .map((_,i) => i) // para no usar el elemento le ponemos "_" , sólo nos interesa el índice no los elementos ni el array 
 .filter (n => !Boolean(n%2)) // n%2 === 0 guardará en un nuevo array solo los elementos pares
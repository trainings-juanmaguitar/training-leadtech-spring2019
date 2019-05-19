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
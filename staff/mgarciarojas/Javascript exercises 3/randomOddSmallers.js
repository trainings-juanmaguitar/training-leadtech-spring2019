/**
 * randomOddSmallers()
Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If 
the number was smaller than 40, print all the numbers down to the randomized one 
(i.e. if the result was 37, you should print: 40, 39, 38, 37)
 */


function randomOddSmallers(){

    var nFinnishNumber=Math.floor(Math.random() * 101); 
    var sAllOddNumbers=''
    var aOddNumbers=[]
  if(nFinnishNumber<40){
    for (var i=40; i>=nFinnishNumber;i--){
         aOddNumbers.push(i)
     
        }
  }else {
  
    for (var x=40; x<=nFinnishNumber;x++){
         if (x%2 > 0) aOddNumbers.push(x)
     
        }
  }

       aOddNumbers.forEach(function (number){
        sAllOddNumbers+=" "+number 
       })
       return sAllOddNumbers
}


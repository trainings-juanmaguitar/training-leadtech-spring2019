/**
 * randomOdd()
Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40 nothing should be printed
 */

function randomOdd(){

    var nFinnishNumber=Math.floor(Math.random() * 101); 
    var sAllOddNumbers=''
    var aOddNumbers=[]
   
    while(nFinnishNumber < 40){
        nFinnishNumber=Math.floor(Math.random() * 101); 
    }
    for (var i=40; i<=nFinnishNumber;i++){
        if (i%2 > 0) aOddNumbers.push(i)
    
       }

       aOddNumbers.forEach(function (number){
        sAllOddNumbers+=" "+number 
       })
       return sAllOddNumbers
}


/**
 * randomSum()
Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. 
For instance, if the randomized number was 1049, program should print 14
 */

 function randomSum(){
    var nRandomNumber=Math.floor(Math.random() * (10000-999)+999);
    var nResultSum=0
    var sRandomInText=nRandomNumber.toString()
    sRandomInText.split('').forEach(function (number){
        nResultSum+=Number(number)
    })
    return nResultSum
 }
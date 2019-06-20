/*
randomSum()
Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. 
For instance, if the randomized number was 1049, program should print 14
*/

function randomSum(){
  var randomNumber = Math.floor(Math.random()*(9999-1000+1)+1000)
  console.log(randomNumber)
  var numberString = randomNumber.toString()
  var result = 0
  var stringNumber =0
  for(var i=0; i<numberString.length;i++){
    stringNumber = parseInt(numberString[i])
    result += stringNumber
  }
  return result
}

console.log('Result: '+randomSum())
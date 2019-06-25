/*
randomOne()
Randomizes a number (range 1000..9999) and calculate the sum of its digits repeatedly until you reach one digit only. 
For instance, if the randomized number was 1049, program should print 5
*/

function randomOne(){
  var randomNumber = Math.floor(Math.random()*(9999-1000+1)+1000)
  console.log(randomNumber)
  var numberString = randomNumber.toString()
  var partialResult = 0
  var stringNumber = 0
  var result = 0
  for(var i=0; i<numberString.length;i++){
    stringNumber = parseInt(numberString[i])
    partialResult += stringNumber
  }
  numberString = partialResult.toString()
  for (var i=0; i<numberString.length;i++){
    stringNumber = parseInt(numberString[i])
    result += stringNumber
  }
  return result
}

console.log('Result: '+randomOne())
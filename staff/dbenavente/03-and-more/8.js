/*
randomSmallest()
Randomizes two numbers and prints the smallest number that is greater 
than one, such that both numbers are divided by it with no remainder. 
For instance, for 9 and 6 you should print 3. If there isn't one a proper note should be printed.*/

function randomSmallest(){
  var randomOne = Math.floor(Math.random()*(101))
  console.log(randomOne)
  var randomTwo = Math.floor(Math.random()*(101))
  console.log(randomTwo)
  var biggest =  Math.max(randomOne,randomTwo)
  var smallest = Math.min(randomOne,randomTwo)
  var result = 0
  result = biggest/smallest
  
  return result
}

console.log('Result: '+randomSmallest())
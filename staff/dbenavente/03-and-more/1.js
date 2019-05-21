/*
randomLargest()
Randomizes three numbers in range (0.. 100) and prints the largest one.
*/

function randomLargest(){
  var randomOne = Math.floor(Math.random()*(101))
  console.log('1-> '+randomOne)
  var randomTwo = Math.floor(Math.random()*(101))
  console.log('2-> '+randomTwo)
  var randomThree = Math.floor(Math.random()*(101))
  console.log('3-> '+randomThree)
  var largest =  Math.max(randomOne,randomTwo, randomThree)
  return largest
}

console.log(randomLargest())
/*
randomRandom()
Randomizes a number n in range 0..100. Now randomizes n more numbers in that range, printing the largest of them.
*/

function randomRandom(){
  var randomNumber = Math.floor(Math.random()*(101))
  console.log('Quantity: '+randomNumber)
  var array = []
  var max = 0
  for (var i=0;i<randomNumber;i++){
    var randomAnother = Math.floor(Math.random()*(randomNumber+1))
    console.log(randomAnother)
    array.push(randomAnother)
  }
  max = Math.max.apply(null,array)
  return max
}

console.log('Result: '+randomRandom())
/*
randomOdd()
Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. 
If the number was smaller than 40 nothing should be printed
*/

function randomOdd(){
  var randomNumber = Math.floor(Math.random()*(101))
  var rangeOdd = ' '
  console.log(randomNumber)
  if(randomNumber>=40){
    for (var i=40;i<=randomNumber;i++){
      if(i%2!=0){
        rangeOdd += i+'\t '
      }
    }
  }
  return rangeOdd
}

console.log(randomOdd())
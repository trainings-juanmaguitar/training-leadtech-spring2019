/*
findLongestWord()
Write a function findLongestWord() that takes an array of words and returns 
the length of the longest one.
*/

function findLongestWord(array) {
  var max = 0;
  var cont = 0;
  for (var i = 0; i < array.length; i++) {
    cont += array[i].length
    if(cont > max){
      max = cont;
    }
    cont = 0;
  }
  return max;
}


var array = ["one", "two", "three", "four", "five", "six"];
console.log(findLongestWord(array));
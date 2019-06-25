/*
filterLongWords()
Write a function filterLongWords() that takes an array of words and an integer 
i and returns the array of words that are longer than i.
*/

function filterLongWords(array, num) {
  var longWorlds = [];
  var index = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > num) {
      longWorlds[index] = array[i];
      index += 1;
    }
  }
  return longWorlds;
}


var array = ["one", "two", "three", "four", "five", "six"];
console.log(filterLongWords(array, 3));
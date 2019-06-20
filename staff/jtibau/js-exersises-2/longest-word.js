//findLongestWord()
//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

var wordsToCompare = ["hola", "oceano", "conquista", "mar", "tierra"]

var strings = []
function findLongestWord(input) {
for (i=0; i<input.length-1; i++) {
  if (strings.length<input[i].length) {
  strings = input[i]
  }
}
result = strings + '\t' + '=' + strings.length;
return result
}

findLongestWord(wordsToCompare)
/**findLongestWord()
 * Write a function findLongestWord() that takes an array of words and returns the length of the longest one. */

 function findLongestWord(wordArray){
     var longestWord=""
    for (var i=0; i<wordArray.length; i++){
        if(wordArray[i].length > longestWord.length){
        longestWord = wordArray[i]
    }
    }
    return "the longest word contains "+longestWord.length+" caracters."
 }
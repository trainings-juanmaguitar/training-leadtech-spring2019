/*
findLongestWord()
Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
*/

function findLongestWord ( words ) {
    var long = 0;
    for (i=0; i<words.length; i++){
        if (words[i].length > long){
          long= words[i].length;
        }
  
    }
    return long;
}

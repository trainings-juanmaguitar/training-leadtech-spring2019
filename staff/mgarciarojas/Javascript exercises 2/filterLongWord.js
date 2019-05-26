/**
 * filterLongWords()
Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
 */


 function filterLongWords(wordArray, minlength){
 var wordsLonger=[];
    for (var i =0; i<wordArray.length; i++){
        if(wordArray[i].length>minlength){
     wordsLonger.push(wordArray[i])
        }
    }

    return wordsLonger
 }
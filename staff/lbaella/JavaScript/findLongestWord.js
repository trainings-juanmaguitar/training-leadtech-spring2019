/*
findLongestWord()
Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
*/

function findLongestWord(array) {
    var lengths = []
    for (var i=0; i< array.length; i++) {
        lengths.push(array[i].length);
    }
    console.log (lengths);
    //Math.max(...arr);
    return Math.max.apply(null,lengths)

}
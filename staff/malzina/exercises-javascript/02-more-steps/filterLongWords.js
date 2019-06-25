/*
Write a function filterLongWords() that takes an array of words and an integer i 
and returns the array of words that are longer than i.
*/

function filterLongWords ( words, limit ) {
    var filteredWords = []
    for (i= 0; i<words.length; i++) {
        if(words[i].length > limit) {
            filteredWords.push(words[i])
        }
    }
    return filteredWords
}
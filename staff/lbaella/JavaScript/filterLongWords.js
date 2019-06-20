/*
filterLongWords()
Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
*/

//filterLongWords(['hola','qu', 'abcd', 'e'],3)

function filterLongWords(arrayWords, number) {
    var longWords = []
    for (var i=0; i< arrayWords.length; i++) {
        if (arrayWords[i].length > number){
            longWords.push(arrayWords[i])
        }
    }
    return longWords;
}
//filterLongWords()
//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

function filterLongWords(arrayWords, i){
    var newArray = [];
    for (var j= 0; j<arrayWords.length; j++){
        if (arrayWords[j].length > i ){
            newArray.push(arrayWords[j]);
        }
    }
    return newArray;
}

var a = filterLongWords(['javascript', 'ruby', 'php', 'java'], 3);
console.log(a)
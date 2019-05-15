//findLongestWord()
//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord(arrayWords){
    var stringLongest = ''; 
    for (var i =0; i<arrayWords.length; i++){
        if (arrayWords[i].length >= stringLongest.length) {
            stringLongest = arrayWords[i];
        }
    }
    return stringLongest;
}

var a = findLongestWord(['javascript', 'ruby', 'java', 'php']);
console.log(a)
// Write a function translate() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".
var translate = function (text) {
    var vowels = ["a", "e", "i", "o", "u", " "];
    var textTransform = "";
    for (i = 0; i < text.length; i++) {
        var textIndex = text[i];
        if (vowels.indexOf(textIndex) != -1) {
            textTransform += textIndex;
        } else {
            textTransform += textIndex + "o" + textIndex;
        }
    }
    return textTransform;
}
console.log(translate("this is fun"));
// Define a function sum() and a function multiply() that sums and multiplies(respectively)
// all the numbers in an array of numbers.For example, sum([1, 2, 3, 4]) should return 10,
// and multiply([1, 2, 3, 4]) should return 24.
// Sum
function sum(num) {
    var numberSum = 0,
        message;

    for (var i = 0; i < num.length; i++) {
        numberSum += num[i];
    }
    message = `El Resultado de la Suma de todos los números ${num} es: ${numberSum}`;
    return message
}
sum([1, 2, 3, 4]);
// Multiply
function multiply(num) {
    var numbersMultiply = 1,
        message;

    for (var i = 0; i < num.length; i++) {
        numbersMultiply *= num[i];
    }
    message = `El Resultado de Multiplicar los números ${num} es: ${numbersMultiply}`;
    return message;
}
multiply([1, 2, 3, 4]);
// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(text) {
    var textArray = text.split("");
    var textArrayReverse = textArray.reverse();
    var textArrayJoin = textArrayReverse.join("");
    return textArrayJoin;
}
reverse("jag testar");
// Represent a small bilingual lexicon as a Javascript object in the following fashion
// { "merry": "god", "christmas": "jul", "and": "och", "happy": gott", "new ":"nytt", "year":"år"}
// and use it to translate your Christmas cards from English into Swedish.
function translate(message) {
    var messageArray = message.split(" ");
    var messageObj = {
        "merry": "god",
        "christmas": "jul",
        "and": "och",
        "happy": "gott",
        "new":"nytt",
        "year":"år"
    }
    var messageTranslate = "";
    for(var i=0; i<messageArray.length; i++) {
        messageTranslate += messageObj[messageArray[i]] + " ";
    }
    return messageTranslate;
}
translate("merry christmas and happy new year");
// Write a function findLongestWord()
// that takes an array of words and returns the length of the longest one.
function findLongestWord(words) {
    var saveLongeWord = "";
    for (var i = 0; i < words.length; i++) {
        saveLongeWord.length < words[i].length ? saveLongeWord = words[i] : '';
    }
    return saveLongeWord;
}
findLongestWord(['aaaaaa', 'b', 'ccc', 1, "dddddddddddddddddd"]);
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it.
// Represent the frequency listing as a Javascript object.Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

// Queda pediente
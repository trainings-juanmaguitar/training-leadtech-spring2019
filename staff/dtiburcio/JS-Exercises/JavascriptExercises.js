/*
translate()
Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
*/

function translateText(textForTranslation){
    var testTranslate = [];

    for (i=0; i < textForTranslation.length; i++){
        if (textForTranslation[i] == ''){
            testTranslate.push(textForTranslation[i]);
        }else if((textForTranslation[i] == 'a')||(textForTranslation[i] == 'e')||(textForTranslation[i] == 'i')||(textForTranslation[i] == 'o')||(textForTranslation[i] == 'u')){
            testTranslate.push(textForTranslation[i]);
        }else{
            testTranslate.push(textForTranslation[i] + 'o' + textForTranslation[i]);
        }
    }
    var resultWithComas = testTranslate.toString();
    var resultTranslation = result.replace(/,/g, '');
    return resultTranslation;
}

/*
sum() & multiply()
Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
*/

function sum(arrayToSum){
    var result = 0;

   for (var i=0; i < arrayToSum.length; i++){
        result += arrayToSum[i];
    }
    return result;
}

function multiply(arrayToMultiply){
    var result = 1;

   for (var i=0; i < arrayToMultiply.length; i++){
        result *= arrayToMultiply[i];
    }

    return result;
}

/*
reverse()
Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
*/

function reverse(stringToReverse){
    var arrayResult = [];

    for (var i = 0; i < stringToReverse.length; i++){
        arrayResult[stringToReverse.length - i] = stringToReverse[i];
    }

    result = arrayResult.toString().replace(/,/g, '');
    return result;
}

/*
translate()
Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.
*/

function translate(stringtoTranslate){
    var stringTranslate = stringtoTranslate.split(' ');
    var lexicon = {
        "merry":"god", "christmas":"jul", "and":"och", "happy":"gott","new":"nytt","year":"år"
    }
    var stringResult = '';

    for (var i = 0; i < stringTranslate.length; i++){
        if (typeof lexicon[stringTranslate[i]] === 'undefined'){
            stringResult += stringTranslate[i] + ' ';
        }
        else { 
            stringResult += lexicon[stringTranslate[i]] + ' ';
        }
    }
    return stringResult.trim();
}

/*
findLongestWord()
Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
*/

function findLongestWord(stringToEvaluate){
    var arrayEvaluate = stringToEvaluate.split(' ');
    var result = '';
    var max = 0;

    for (var i = 0; i < arrayEvaluate.length; i++){
        temp = arrayEvaluate[i].length;
        
        if (temp > max){
            result = arrayEvaluate[i];
            max = temp;
        }
    }
    return max;
}

/*
filterLongWords()
Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
*/

function filterLongWords(stringOfWords, mininum){
    var listOfWords = stringOfWords.split(' ');
    var result = [];

    for (var i = 0; i < listOfWords.length; i++){
        if (listOfWords[i].length > mininum){
            result.push(listOfWords[i]);
        }
    }
    return result;
}

/*
charFreq()
Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
*/

function charFreq(stringEvaluate){

    var freq = new Object();  
    
    for (var i = 0; i < stringEvaluate.length; i++){
        if (freq[stringEvaluate[i]]) freq[stringEvaluate[i]] += 1;
        else freq[stringEvaluate[i]] = 1;
    }
    return freq;
}
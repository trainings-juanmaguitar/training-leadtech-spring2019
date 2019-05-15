/*
translate()
Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
*/

function translateText(textForTranslation){
    var testTranslate = [];
    var resultWithComas = '';
    var resultWithoutComas = '';

    for (i=0; i < textForTranslation.length; i++){
        if (textForTranslation[i] == ''){
            testTranslate.push(textForTranslation[i]);
        }else if((textForTranslation[i] == 'a')||(textForTranslation[i] == 'e')||(textForTranslation[i] == 'i')||(textForTranslation[i] == 'o')||(textForTranslation[i] == 'u')){
            testTranslate.push(textForTranslation[i]);
        }else{
            testTranslate.push(textForTranslation[i] + 'o' + textForTranslation[i]);
        }
    }
    resultWithComas = testTranslate.toString();
    resultTranslation = result.replace(/,/g, '');
    return resultTranslation;
}

/*
sum() & multiply()
Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
*/

function sum(arrayToSum){
    var arraySum = arrayToSum;
    var quantity = arraySum.length - 1;
    var result = 0;

   for (var i=0; i <= quantity; i++){
        result += arraySum[i];
    }

    return result;
}

function multiply(arrayToMultiply){
    var arrayMultiply = arrayToMultiply;
    var quantity = arraySum.length - 1;
    var result = 1;

   for (var i=0; i <= quantity; i++){
        result *= arraySum[i];
    }

    return result;
}

/*
reverse()
Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
*/

function reverse(stringToReverse){
    var stringReverse = stringToReverse;
    var arrayResult = [];

    for (var i = 0; i < stringReverse.length; i++){
        arrayResult[stringReverse.length - i] = stringReverse[i];
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
    var words = stringTranslate.length - 1;

    for (var i = 0; i <= words; i++){
        switch (stringTranslate[i]) {
            case 'merry': 
                stringTranslate[i] = 'god'; 
                break;
            case 'christmas':
                stringTranslate[i] = 'jul';
                break;
            case 'and':
                stringTranslate[i] = 'och';
                break;
            case 'happy':
                stringTranslate[i] = 'gott';
                break;
            case 'new':
                stringTranslate[i] = 'nytt';
                break;
            case 'year':
                stringTranslate[i] = 'år';
                break;
            default:
                break;
          }
    }
    var result = stringTranslate.join();
    var result2 = result.replace(/,/g,' ');
    return result2;
}

/*
findLongestWord()
Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
*/

function findLongestWord(stringToEvaluate){
    var stringEvaluate = stringToEvaluate.split(' ');
    var words = stringEvaluate.length - 1;
    var result = '';
    var max = 0;

    for (var i = 0; i <= words; i++){
        temp = stringEvaluate[i].length;
        
        if (temp > max){
            result = stringEvaluate[i];
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
    var words = listOfWords.length - 1;
    var min = mininum;
    console.log(min);
    var result = [];

    for (var i = 0; i <= words; i++){
        if (listOfWords[i].length > min){
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
    var stringLetters = stringEvaluate;
    var letters = stringLetters.length - 1;

    var freq = new Object();
            freq.letraA = 0;
            freq.letraB = 0;
            freq.letraC = 0;   

    for (var i = 0; i <= letters; i++){
        if (stringLetters[i] == 'a'){
            freq.letraA += 1;
        }
        if (stringLetters[i] == 'b'){
            freq.letraB += 1;
        }
        if (stringLetters[i] == 'b'){
            freq.letraC += 1;
        }
    }
    return freq;
}
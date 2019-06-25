'use strict';
//https://github.com/juanmaguitar/exercises-javascript/blob/master/02-more-steps/README.md

//Notación húngara

// 1. Tipo de dato
// s -> string
// a -> array
// n -> number
// ...number
// ..

//translate()
//Write a function translate() that will translate a text into "rövarspråket". 
//That is, double every consonant and place an occurrence of "o" in between. 
//For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate(word) {
  var vowel = ['a', 'e', 'i', 'o', 'u', ''];
  var arrayWords = [''];
  for (var i=0; i<word.length; i++) {
    var count = 0;
    for (var j=0; j<vowel.length; j++) {
      if (word[i] !== vowel[j]) {
        count ++;
      }
    }
    if (count === 5) {
      var wordToPush = word[i]+ 'o' + word[i];
      arrayWords.push(wordToPush);
    }
    if (count < 5) {
      var wordToPush2 = word[i];
      arrayWords.push(wordToPush2);
    }
  }
  return arrayWords.join('');
}

translate("window is wind");

//Solution 2

function isVowel(sChar) {
  return ['a', 'e', 'i', 'o', 'u'].includes(sChar);
}

function translate(sText) {
  var sResult = '';
  var sCurrentChar = '';
  for (var i=0; i<sText.length; i++) {
    sCurrentChar = sText[i];
    if (isVowel(sCurrentChar) || sCurrentChar === ' ') {
      sResult += sCurrentChar;
    } else {
      sResult += sCurrentChar + 'o' + sCurrentChar
    }
  }
  return sResult;
}


//sum() & multiply()
//Define a function sum() and a function multiply() that sums and multiplies (respectively) 
//all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and 
//multiply([1,2,3,4]) should return 24.

function sum(array) {
  var totalSum = array.reduce((acc, elem)=> {
    acc = acc + elem
    return acc;
  });
  return totalSum;
}

function multiply(array) {
  var totalMul = array.reduce((acc, elem) => { 
    acc = acc * elem;
    return acc;
  }, 1);
  return totalMul;
}

console.log(sum([2,3,4,5,6,7,8,9]));
console.log(multiply([2,3,4,5]));


//reverse()
//Define a function reverse() that computes the reversal of a string. For example, 
//reverse("jag testar") should return the string "ratset gaj".

function reverse(string) {
  var stringToArray = string.split('');
  var reversedArray = stringToArray.reverse();
  var reversedString = reversedArray.join('');

  return reversedString;
};

console.log(reverse("Frase de prova"));

// The same but in one line
function reverse(string) {
  var reversedString = string.split('').reverse().join('');

  return reversedString;
};

console.log(reverse("Frase de prova"));

//translate()
//Represent a small bilingual lexicon as a Javascript object in the following fashion 
//{"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} 
//and use it to translate your Christmas cards from English into Swedish.



function translate(sentence) {
  var dictionary = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"}
  var splitSentence = sentence.split(' ');
  var translatedSentence = [];
  var result = '';

  for (var i = 0; i<splitSentence.length; i++) {
    if (dictionary[splitSentence[i]]){
      translatedSentence.push(dictionary[splitSentence[i]] + ' ');
    } else {
      translatedSentence.push(' ??? ')
    }
  }

  result = translatedSentence.join('');

  
  return result;
};

console.log(translate("merry christmas and happy new year 2019!"));

//Solution 2


function translateToSwedish(sMessageEnglish) {
  var aWordsMessage = sMessageEnglish.split(' ');
  var sCurrentWord = '';
  for ( var i=0; i<aWordsMessage.length; i++) {
    sCurrentWord = aWordsMessage[i];
    sTranslatedMessage = dictionary[sCurrentWord]+ ' ';
  }
  return sTranslatedMessage.trim(); // Para eliminar espacios en blanco delante y detrás
}
console.log(translate("merry christmas and happy new year 2019!"));

//Solution 3


function translate(dictionary) {
  return function (sMessageEnglish) {
    var aWordsMessage = sMessageEnglish.split(' ');
    var sCurrentWord = '';
    for ( var i=0; i<aWordsMessage.length; i++) {
      sCurrentWord = aWordsMessage[i];
      sTranslatedMessage = dictionary[sCurrentWord]+ ' ';
    }
    return sTranslatedMessage.trim(); // Para eliminar espacios en blanco delante y detrás
  }
}

var translateToSwedish = translate({"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"});
translateToSwedish("merry christmas and happy new year 2019!");


//findLongestWord()
//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord(words) {
  var long = '';
  var longestLength = words.reduce((acc, elem, index)=>{
    if (elem.length > long.length) {
      long = elem;
    }
  });
  return "The longest word length is " + long.length;
};

console.log(findLongestWord(['write', 'a', 'function', 'that', 'will', 'translate']));


//filterLongWords()
//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

function filterLongWords(words, number) {
  var returnArray = [];
  var wordsLongerThanNumber = words.map((elem, index, array) => {
    if (elem.length>number) {
      return elem;
    } 
  });
  for (var i=0; i<wordsLongerThanNumber.length; i++) {
    if (wordsLongerThanNumber[i] === undefined) {
      wordsLongerThanNumber.splice(i,1);
      i--;
    }
  }
  return wordsLongerThanNumber;
};

console.log(filterLongWords(['write', 'a', 'function', 'that', 'will', 'translate'], 4));


//charFreq()
//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency 
//listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

function charFreq(myString){
  var storage = {};
  for (var i=0; i<myString.length; i++) {
    if (!storage[myString[i]]){
      storage[myString[i]] = 1;
    } else {
      storage[myString[i]] += 1;
    }
  }
  return storage;
};

console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));



function log(elem) {
  console.log(elem);
}

function mul(item) {
  return item * 2
}

function isEven(item) {
  return item%2 === 0;
}

[2,5,4,9].forEach(log);
[2,5,4,9].map(mul);   // [4,10,8,18]
[2,5,4,9].filter(isEven);
[2,5,4,9].reduce(function(acc, elem, inddex, array) {

}, init);



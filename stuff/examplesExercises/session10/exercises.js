/* Write a function translate() that will translate a text into
"rövarspråket". That is, double every consonant and place an occurrence of "o"
in between. For example, translate("this is fun") should return the string
"tothohisos isos fofunon". */

// sText.split("") → "this is fun" → ["t","h","i"]
// sText.split(" ") → "this is fun" → ["this","is","fun"]

function isVowel(sChar) {
	return ['a','e','i','o','u'].includes()
}

function translate(sText) {
	var sResult = ''
	var sCurrentChar = ''
	for (var i=0; i<sText.length; i++)	{
		sCurrentChar = sText[i]
		if ( isVowel(sCurrentChar) || sCurrentChar === ' ') {
			sResult += sCurrentChar
		}
		else {
			sResult += sCurrentChar	+ 'o' + sCurrentChar
		}
	}
	return sResult
}

/* Represent a small bilingual lexicon as a Javascript object in the following
fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott",
"new":"nytt", "year":"år"} and use it to translate your Christmas cards from
English into Swedish.
*/

message = "merry christmas and happy new year"
// message.trim() → "merry christmas and happy new year"

aWordsMessage = ["merry","christmas","and","happy","new","year"]



function translateToSwedish( sMessageEnglish ) {

	var dictionary = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott",
"new":"nytt", "year":"år"}

	// nameProp = "and"
	// dictionary.merry → "god"
	// dictionary[nameProp] → "och"

	var aWordsMessage = sMessageEnglish.split(" ")
	var sCurrentWord = ''
	var aTranslatedMessage = []

	for (var i=0; i<aWordsMessage.length; i++) {
		sCurrentWord = aWordsMessage[i]
		aTranslatedMessage.push(dictionary[sCurrentWord])
	}

	return aTranslatedMessage.join(" ")
}

translateToSwedish(message) 

// -------

function translate( dictionary ) {
	return function ( sMessageEnglish ) {
		var aWordsMessage = sMessageEnglish.split(" ")
		var sCurrentWord = ''
		var aTranslatedMessage = []

		for (var i=0; i<aWordsMessage.length; i++) {
			sCurrentWord = aWordsMessage[i]
			aTranslatedMessage.push(dictionary[sCurrentWord])
		}

		return aTranslatedMessage.join(" ")
	}
}

var translateToSwedish = translate({"merry":"god", "christmas":"jul", "and":"och", "happy":"gott",
"new":"nytt", "year":"år"}) 
translateToSwedish("merry christmas and happy new year")

var translateToSpanish = translate({"merry":"feliz", "christmas":"navidad", "and":"y", "happy":"feliz",
"new":"nuevo", "year":"año"}) 

// -------

/* Write a function charFreq() that takes a string and builds a frequency
listing of the characters contained in it. Represent the frequency listing as
a Javascript object. Try it with something like
charFreq("abbabcbdbabdbdbabababcbcbab"). */


function charFreq(sText) {
	var nNumChars = sText.length
	var sCurrentChar = sText.length
	var oFreqChars = {}
	for (var i=0; i<nNumChars; i++) {
		sCurrentChar = sText[i]
		if (!oFreqChars[sCurrentChar]) oFreqChars[sCurrentChar] = 1
		else ++oFreqChars[sCurrentChar]
	}
	return oFreqChars
}







/*
Represent a small bilingual lexicon as a Javascript object in the following fashion 
{"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} 
and use it to translate your Christmas cards from English into Swedish.
*/

var message = "merry christmas and happy new year"

function translateToSwedish( sMessageEnglish ) {
    var dictionary = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"};
    var aWordsMessage = sMessageEnglish.split(" ")
    var sCurrentWord = ''
    var aTranslatedMessage = []
    for(var i = 0; i<aWordsMessage.length; i++) {
        sCurrentWord = aWordsMessage[i]
        aTranslatedMessage.push(dictionary[sCurrentWord])
    }
    return aTranslatedMessage.join("")
}


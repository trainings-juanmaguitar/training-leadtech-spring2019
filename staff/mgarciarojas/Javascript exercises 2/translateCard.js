/**
 * translate()
Represent a small bilingual lexicon as a Javascript object in the following fashion
 {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} 
 and use it to translate your Christmas cards from English into Swedish.
 */


function translate(cardText){
   var cardTextSwedish="";
var lexicon = {
    "merry": "god",
    "christmas" : "jul",
     "and":"och",
     "happy":"gott",
     "new":"nytt",
     "year": "år"
}
 cardText = CardText.split(" ")
 for (var i=0; i<cardText.length-1; i++){
    cardTextSwedish+= lexicon[cardText[i]] + " "
    }
    return cardTextSwedish

 }

 // trasnslate in class


var message ="merry christmas and happy new year"
 function translateToSwedish(sMessageEnglish){
   var dictionary = {
      "merry": "god",
      "christmas" : "jul",
       "and":"och",
       "happy":"gott",
       "new":"nytt",
       "year": "år"
    }
    var aWordsMessage = sMessageEnglish.split(' ')
    var sCurrentWord = ''
    var atextTranslated=[]
    for ( var i=0; i<aWordsMessage.length; i++){
         sCurrentWord=aWordsMessage[i]
         atextTranslated.push(dictionary[sCurrentWord]) 
    }
    return atextTranslated.join(" ")
 }
 

 // 2º solucion

 function translate (dictionary){
    return  function (sMessageEnglish){
       var aWordsMessage = sMessageEnglish.split(' ')
       var sCurrentWord = ''
       var atextTranslated=[]
       for ( var i=0; i<aWordsMessage.length; i++){
            sCurrentWord=aWordsMessage[i]
            atextTranslated.push(dictionary[sCurrentWord]) 
       }
       return atextTranslated.join(" ")
 }
}

var translateToSwedish = translate({
   "merry": "god",
   "christmas" : "jul",
    "and":"och",
    "happy":"gott",
    "new":"nytt",
    "year": "år"
 }) // ahora a la funcion le podríamos pasar cualquier diccionario y funcionaría

translateToSwedish("merry christmas and happy new year")
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
    cardTextSwedish+= lexicon[cardText[i]]
 }
    return cardTextSwedish

 }
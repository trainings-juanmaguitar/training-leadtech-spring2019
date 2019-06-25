//Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.

var diccionary = {
    "merry": "god", 
    "christmas": "jul", 
    "and": "och", 
    "happy": "gott", 
    "new": "nytt", 
    "year": "år"
    } 

function translate(cardsChistmas){
    arrayCardsChistmas = cardsChistmas.split(' ');
    for(var i=0; i<arrayCardsChistmas.length; i++){
        for (var variable in diccionary){
            if (arrayCardsChistmas [i] == variable){
                arrayCardsChistmas[i] = diccionary[variable];
            }
        }
    }
    return arrayCardsChistmas.join(' ');    
}


var a = translate('merry christmas and happy new year')

console.log(a)

/*
translate()
Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.
*/

function translateSwedish(string) {
    var words = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"};
    var stringArray = string.split(' ');
    var translate = "";
    for (var i = 0; i< stringArray.length; i++) {
        if (words[stringArray[i]]) {
            translate += words[stringArray[i]] + ' ';
            //translate.push(words[stringArray[i]]);
        }
    }
    return translate.trim();
    //return translate.join(" ")
}

//translate.trim() -> Quita espacios delantes y depsués del string
//Join generamos un string de un array separado por espacio o lo que se le indique netre parentesis



/* Opción clousure */

function translate(dictionary) {
    return function translateSwedish(string) {
       
        var stringArray = string.split(' ');
        var translate = "";
        for (var i = 0; i< stringArray.length; i++) {
            if (words[stringArray[i]]) {
                translate += words[stringArray[i]] + ' ';
                //translate.push(words[stringArray[i]]);
            }
        }
        return translate.trim();
        //return translate.join(" ")
    }
}

var words = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"};

var translateToSwedish = translate(words)
translateToSwedish("Merry Christmas")
/*
translate()
Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.
*/

function translateSwedish(string) {
    var words = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"};
    var stringArray = string.split(' ');
    var translate = "";
    console.log(stringArray);
    for (var i = 0; i< stringArray.length; i++) {
        if (words[stringArray[i]]) {
            translate += words[stringArray[i]] + ' ';
        }
    }
    return translate;
}
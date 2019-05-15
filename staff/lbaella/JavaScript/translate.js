/*
translate()
Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
*/

function translate (text) {
    var textTranslate= "";
    var arrayText = text.split('');
    for (var i=0; i< text.length; i++) {
        var letter = arrayText[i];
        console.log(letter);
        if (['a','e','i','o','u'].includes(letter)) {
            textTranslate += letter; 
        }  else if (letter === ' '){
            textTranslate += " "; 
        }   else {
            textTranslate += letter + "o" + letter; 
        }
    }
    return textTranslate;
}
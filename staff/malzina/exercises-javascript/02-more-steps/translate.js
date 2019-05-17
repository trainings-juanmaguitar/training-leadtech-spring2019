/*
Write a function translate() that will translate a text into "rövarspråket". 
That is, double every consonant and place an occurrence of "o" in between. 
For example, translate("this is fun") should return the string "tothohisos isos fofunon".
*/

function isVowel(sChar) {
    return ['a','e','i','o','u'].includes(sChar);
}


function translate( sText ) {
    var sResult = '';
    var sCurrentChar = '';
    for(var i= 0; i<sText.length; i++) {
        sCurrentChar = sText[i];
        if(isVowel(sCurrentChar) || sCurrentChar === ' ') {
            sResult += sCurrentChar;
        } else {
            sResult += sCurrentChar + 'o' + sCurrentChar;
        }
    }
    return sResult;
}
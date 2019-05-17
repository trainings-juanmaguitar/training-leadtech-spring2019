/*
Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. 
Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
*/

function charFreq( sText ){
    var nNumChars = sText.length
    var sCurrentChar = sText.length
    var oFreqChars = {}
    for (var i = 0; i<= nNumChars; i++) {
        sCurrentChar = sText[i]
        if(!oFreqChars[sCurrentChar]) oFreqChars[sCurrentChar] = 1
        else ++oFreqChars[sCurrentChar]
    }
    return oFreqChars
}

/**
 * Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
 */


function reverse(word){
var arrayChars=word.split()
var reversedWord="";
    for (var i=arrayChars.length-1; i<=0; i--){
        reversedWord += arrayChars[i]
    }

    return reversedWord
}
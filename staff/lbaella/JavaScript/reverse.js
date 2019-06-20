/*
reverse()
Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
*/

function reverse (text) {
    var numberLetters = text.length;
    var arrayText = text.split('');
    var result = '';
    
    for (var i = numberLetters-1; i>=0; i--) {
        result += arrayText[i]
    }
    return result;
}
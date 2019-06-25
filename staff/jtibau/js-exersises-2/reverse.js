//reverse()
//Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(string) {
    var text = '';
    for (var i = string.length - 1; i >= 0; i--) {
    	text += string[i];
    }
    return text;
}
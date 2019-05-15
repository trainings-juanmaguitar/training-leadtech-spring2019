/*
charFreq()
Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
*/

function charFreq(string) {
    var result = {};
    var arrayString = string.split('');
 
    for(var i=0; i<arrayString.length; i++) {
        var letter = arrayString[i];
        if (arrayString[i]!= ' ') {
            if (result[letter]) result[letter] = result[letter] + 1;
            else result[letter] = 1;
        }
    }
    return result;
}


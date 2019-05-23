//charFreq()
//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
var counter = 0;
var result = '';
var hashFreq = new Map();
function charFreq(text){
    var arrayText = text.split('');
    for (var i=0; i<arrayText.length; i++){
        counter = 0;
        for (var j=0; j<arrayText.length; j++){
            if (arrayText[i]== arrayText[j]){
                counter +=1;
            }
        }   
        hashFreq.set(arrayText[i], counter); 
    }
    for (var [clave, valor] of hashFreq){
        result += 'Frecuency ' + clave + ' = '+ valor + '\n';
    }
    return result;
}

var a = charFreq('ababababd');
console.log(a)
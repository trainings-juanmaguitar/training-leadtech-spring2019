// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate(text){
    var result = '';
    arraytext = text.split('');
    var arrayVowel = ['a','e','i','o','u', ' '];
    for (var i=0; i<text.length; i++){
        if (arrayVowel.includes(arraytext[i])){
            result += arraytext[i];
        } else {
            result += arraytext[i] + 'o' + arraytext[i]
        }
    } 
    return result;
}

var a = translate("this is fun")
console.log(a)

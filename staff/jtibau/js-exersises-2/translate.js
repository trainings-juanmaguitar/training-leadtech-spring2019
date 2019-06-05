//translate()
//Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
var translate = function(text) {
  var string = text.toLowerCase();
  var vowels = ["a", "e", "i", "o", "u", " "];
  var y = "";
  for (i = 0; i < string.length; i++) {
     var current = string.charAt(i); 
    if (vowels.indexOf(current) != -1) {
        y = (y + (current));
    } else {
        y = (y + (current + "o" + current));
    }
  }
  return y;
}

console.log(translate("this is fun"));

//--------------------------------------------------

function translate(sText){
  var aChars = sText.split(" ");
  var sResult = '';
  var sCurrentChar = '';
  for (var i=0; i<aChart.length; i++){
    sCurrentChar = aChart[i];
    if( isVowel (sCurrentChar) || sCurrentChar === ' '){
      sResult += sCurrentChar;
    } else {
      sResult += sCurrentChar + 'o' + sCurrentChar;
    }
    return sResult;
  }
}
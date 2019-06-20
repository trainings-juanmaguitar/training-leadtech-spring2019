/*
translate()
Write a function translate() that will translate a text into "rövarspråket". 
That is, double every consonant and place an occurrence of "o" in between. 
For example, translate("this is fun") should return the string "tothohisos isos fofunon".
*/

function translate(string) {
  var newString = '';
  var vowels = ['a','e','i','o','u','A','E','I','O','U',' '];
  for (var i = 0; i < string.length; i++) {
    newString += string[i];
    if(!vowels.includes(string[i])){
      newString += 'o'+string[i];
    }
  }
  return newString;
}


var string = "this is fun";
console.log(translate(string));
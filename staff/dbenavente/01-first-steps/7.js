/*
isVowel() function
Write a function that takes a character (i.e. a string of length 1) 
and returns true if it is a vowel, false otherwise.
*/

function isVowel(x){
  var vowels = ['a','e','i','o','u','A','E','I','O','U'];
  if(vowels.includes(x)){
    return true;
  }else{
    return false;
  }
}

console.log(isVowel(1));
console.log(isVowel("test"));
console.log(isVowel("a"));
console.log(isVowel("c"));
console.log(isVowel("U"));
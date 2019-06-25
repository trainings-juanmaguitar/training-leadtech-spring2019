/**
 * encodeWord
Define a function called ​encodeWord​ that receives a string
 and return the codified version of that string replacing the following characters:

7 instead of T
4 instead of A
5 instead of S
0 instead of O
 */

 function encodeWord(sWord){
   var sResultWord =decode(sWord,"t","7")
   sResultWord = decode(sResultWord,"a","4")
   sResultWord = decode(sResultWord,"s","5")
   sResultWord = decode(sResultWord,"o","0")
 return sResultWord
 }

 function decode(sWordToDecode, sLetterToReplace, sReplacement){
     var sRegex= new RegExp(sLetterToReplace,"g")
     var sDecode = sWordToDecode.replace(sRegex, sReplacement)
     return sDecode
 }
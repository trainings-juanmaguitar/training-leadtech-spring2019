/**
 * translate()
 * Write a function translate()
that will translate a text into "rövarspråket". 
That is, double every consonant and place an occurrence of "o" in between.
 For example, translate("this is fun") should return the string "tothohisos isos fofunon"
 */

 function translate (text) {

   var chars = text.split('') // nos podemos ahorrar este paso. text[0]
   var translation="";
   for (i=0; i<chars.length; i++){
    
      // if (['a','e','i','o','u'].includes(chars[i])||chars[i]==" "){
        if (/[aeiouAEIOU]/.test(chars[i])||chars[i]==" "){
        translation += chars[i]
       
       }else{
        translation += chars[i]+"o"+ chars[i]
   
       }
   }
   return translation
 }

 // translate in class
 function isVowelEnhanced(letter){
  return /[aeiouAEIOU]/.test(letter);
}

 function translate (sText) {

var translation="";
var sCurrentChar =''
for ( var i=0; i<sText.length; i++){
  sCurrentChar= sText[i]
  if (isVowel(sCurrentChar)|| sCurrentChar==='')
  translation += sText[i];
  
}
}

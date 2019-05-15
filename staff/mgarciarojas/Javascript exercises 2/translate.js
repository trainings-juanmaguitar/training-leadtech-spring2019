/**
 * translate()
 * Write a function translate()
that will translate a text into "rövarspråket". 
That is, double every consonant and place an occurrence of "o" in between.
 For example, translate("this is fun") should return the string "tothohisos isos fofunon"
 */

 function translate (text) {

   var chars = text.split()
   var translation="";
   for (i=0; i<chars.length-1; i++){
       
       if (!['a','e','i','o','u'].includes(chars[i])){

        translation += chars[i]+"o"+ chars[i]
       }else{
        translation += chars[i]
       }
   }
   return translation
 }

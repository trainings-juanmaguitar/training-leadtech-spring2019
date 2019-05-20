/**
 * /encodeWordPlus
Improve the previous function to add a random number between 0 and 1000 every 7 characters
 */
//**OLD FUNCTION */
function encodeWord(sWord){
    var sWordWithRandom=encodeWordPlus(sWord)
    var sResultWord =decode(sWordWithRandom,"t","7")
    sResultWord = decode(sResultWord,"a","4")
    sResultWord = decode(sResultWord,"s","5")
    sResultWord = decode(sResultWord,"o","0")
  return sResultWord
  }
 //**OLD FUNCTION */
  function decode(sWordToDecode, sLetterToReplace, sReplacement){
      var sRegex= new RegExp(sLetterToReplace,"g")
      var sDecode = sWordToDecode.replace(sRegex, sReplacement)
      return sDecode
  }

//**NEW ADDED FUNCTION */
 function encodeWordPlus(sWord){
     var cCharArray=sWord.split('')
     for (var i=6; i<cCharArray.length;i+=7){
        var nRandomNumber=Math.floor(Math.random() * 1001); 
        cCharArray.splice(i+1,0,nRandomNumber)
     }

   var sString= cCharArray.toString().replace(/,/g,'')
  return sString  
 }
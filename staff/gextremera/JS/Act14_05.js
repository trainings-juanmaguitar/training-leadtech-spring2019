/**
 * Crea una función que devuelva el número de veces que se ha ejecutado.
 */

function getHowManyTimes(){
    var howManyTimes = 0;
    return function(){
        return ++howManyTimes; // devuelve howManyTimes +1
    }
}
var howManyTimes = getHowManyTimes();

/**
 * Dame una función que devuelva una contraseña máximo 3 veces
 */
var password = setPassword("12345");
password() // "[3] 12345"
password() // "[2] 12345"
password() // "[1] 12345"
password() // "Time Out"


function setPassword(pass){
    var counter = 0;
    var internPassword = pass;
    return function(){        
        counter ++;
        switch(counter){
            case 1:
                return "[3]" + internPassword;
                break;
            case 2:
                return "[2]"  + internPassword;
                break;
            case 3:
                return "[1]" + internPassword;
                break;
            default:
                return "Time Out";
                break;   
        }
    }
}

var password = setPassword("77889900");


/**
 * Solución JuanMa y Miquel
 */

function setPassword(pass) {
    var count = 3
    return function() {
        if(count > 0) {
            --count
            return pass
        } else {
            return "num max superado"
        }
    }
}

var password = setPassword("123456");



/**
 * translate()
 * Escriba una función translate() que traduzca un texto a 
 * "rövarspråket". Es decir, duplicar cada consonante y colocar 
 * una aparición de "o" en medio. Por ejemplo, traducir 
 * ("this is fun") debería devolver la cadena 
 * "tothohisos isos fofunon".
 */

function translate(string){
    var origin = string;
    var finale = [];
    for( var i = 0; i < origin.length; i++){        
        if(origin[i] == ' '){        
          finale.push(" ")
        }else if (origin[i] == "a" || origin[i] == "e" || origin[i] == "i" || origin[i] == "o" || origin[i] == "u"){          
          finale.push(origin[i])
        } else {        
          finale.push(origin[i] + "o" + origin[i]);
        }
    }
    var string = finale.toString();
    var translated = string.replace(/[,]/g, '');
    return translated;
}

translate("this is fun");


/**
 * sum() & multiply()
 * Defina una función sum() y una función multiply() que suma y 
 * multiplica (respectivamente) todos los números en una array de 
 * números. Por ejemplo, la suma ([1,2,3,4]) debe devolver 10, y 
 * la multiplicación ([1,2,3,4]) debe devolver 24.
 */
 
 function sum(number){
    var operatorSum = number;
    var resultSum = 0;
    for(var i = 0; i < operatorSum.length; i++){
        if(i === 0){
            resultSum = operatorSum[0];
        } else {
            resultSum = resultSum + operatorSum[i];    
        }    
    }
    return resultSum;
 }
 sum([1,2,3,4]);

 function multiply(number){
    var operatorMultiply = number;
    var resultMultiply = 0;
    for(var i = 0; i < operatorMultiply.length; i++){
        if(i === 0){
            resultMultiply = operatorMultiply[0];
        } else {
            resultMultiply = resultMultiply * operatorMultiply[i];    
        }    
    }
    return resultMultiply;
 }
 multiply([1,2,3,4]);


/**
 * reverse()
 * Defina una función reverse() que calcula la inversión de una 
 * cadena. Por ejemplo, reverse ("jag testar") debe devolver la 
 * cadena "ratset gaj".
 */

 function reverse(string){
     var initial = string;
     var finale = [];
     for( var i = initial.length-1; i >= 0; i--){
         finale.push(initial[i]);
     }
     var string = finale.toString();
     var reversed = string.replace(/[,]/g, '');
     return reversed;
 }
 reverse("jag testar");


 /**
  * translate()
  * Represente un pequeño léxico bilingüe como un objeto Javascript 
  * de la siguiente manera: 
  * {
  *     "merry" : "god", 
  *     "christmas" : "jul", 
  *     "and" : "och", 
  *     "happy" : gott ", 
  *     "new " : "nytt",
  *     "year" :" år "
  * }
  *  y úselo para traducir sus tarjetas de Navidad del inglés al sueco.
  */

function translate(string){
 var language = {
    "merry" : "god", 
    "christmas" : " jul", 
    "and" : " och", 
    "happy" : " gott", 
    "new" : " nytt",
    "year" : " år"
  };
  var translateInitial = string.split(' ');
  var translateFinal = [];
  for( var i = 0; i < translateInitial.length; i++){
      if ( language[translateInitial[i]]){
          translateFinal.push(language[translateInitial[i]]);
      } else {
          return "ERROR"
      }
  }
  var string = translateFinal.toString();
  var result = string.replace(/[,]/g, '');
  return result;
}


/**
 * findLongestWord()
 * Escriba una función findLongestWord() que toma un array 
 * de palabras y devuelve la longitud de la más larga.
 */

 function findLongestWord(array){     
     var length = [];
     for ( var i = 0; i < array.length; i++){
        length.push(array[i].length); 
     }
     return Math.max.apply(null, length);
 }


 /**
  * filterLongWords()
  * Escriba una función filterLongWords() que tome una array de 
  * palabras y un entero i y devuelva la array de palabras que 
  * son más largas que i.
  */


  function filterLongWords(words, limit){      
      var solutionWords = [];
      for( var i = 0; i<words.length; i++){
          if(words[i].length > limit){
              solutionWords.push(words[i]);
          }
      }
      return solutionWords;
  }
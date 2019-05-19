/**
 * randomLargest()
 * Aleatoriza tres números en el rango (0 .. 100) 
 * e imprime el más grande.
 */

 function randomLargest(){
     var aCompareNumbers = [];     
     for ( var i = 0; i < 3; i++){
        aCompareNumbers.push(Math.round(Math.random()*100));
        //console.log(aCompareNumbers); (Se ha dejado este comentario para ver en consola si hacía correctamente el cálculo)
     }
     return Math.max.apply(null, aCompareNumbers);
 }
 randomLargest();

 /**
  * randomEven()
  * Aleatoriza un número (rango 0..100), luego imprime todos los números 
  * pares desde 0 hasta el aleatorizado.
  */

 function randomEven(){
     var nRandomNumber = Math.round(Math.random()*100);
     var aResult = [];
     for (var i = 0; i <= nRandomNumber; i+=2){
         aResult.push(i);         
     }
     return "For max number: " + nRandomNumber + " this is a result: " + aResult;     
 }
 randomEven();

 /**
  * randomOdd()
  * Aleatoriza un número (rango 0..100), luego imprime todos los números 
  * impares de 40 a ese. Si el número era menor que 40, no se debería imprimir nada.
  */

  function randomOdd(){
    var nRandomNumber = Math.round(Math.random()*100);
    var aResult = [];
    if( nRandomNumber >= 40){
        for( var i=40; i <= nRandomNumber; i++){
            if(i%2 != 0){
                aResult.push(i);
            }
        }
        return aResult;        
    }else{
        return "Sigue intentado";
    }
  }
  randomOdd();


  /**
   * randomOddSmallers()
   * Aleatoriza un número (rango 0..100), luego imprime todos los números 
   * impares de 40 a ese. Si el número era menor que 40, imprima todos los 
   * números hasta el número aleatorio (es decir, si el resultado fue 37, debe imprimir: 40, 39, 38, 37)
   */

   function randomOddSmallers(){
    var nRandomNumber = Math.round(Math.random()*100);
    var aResult = [];
    if( nRandomNumber >= 40){
        for( var i=40; i <= nRandomNumber; i++){
            if(i%2 != 0){
                aResult.push(i);
            }
        }
        return aResult;        
    }else{
        for( var i=40; i >= nRandomNumber; i--){            
            aResult.push(i);            
        }
        return aResult;
    }
   }
   randomOddSmallers();

   /**
    * randomRandom()
    * Aleatoriza un número n en el rango de 0..100. Ahora aleatoriza n más números 
    * en ese rango, imprimiendo el mayor de ellos.
    */

    function randomRandom(){
        var nNumber = Math.round(Math.random()*100);
        var aResult = [];
        var nNewRandomNumber;
        for( var i = 0; i<nNumber; i++){
            nNewRandomNumber = Math.round(Math.random()*nNumber)
            aResult.push(nNewRandomNumber);
        }
        return aResult;
    }
    randomRandom();

    /**
     * randomSum() 
     * Asigna aleatoriamente un número (rango 1000 .. 9999) y calcula la suma 
     * de sus dígitos. Por ejemplo, si el número aleatorio era 1049, el programa 
     * debería imprimir 14
     */

     function randomSum(){
        var nNumber =Math.round(Math.random()*9999)+1000;
        var aNumberInd = nNumber.toString();        
        var nResult = 0;
        aNumberInd.split('')
        for( var i = 0; i<aNumberInd.length; i++){
            nResult+=Number(aNumberInd[i]);
        }
        return "La suma de los dígitos de " + nNumber + " es igual a " + nResult;
     }
     randomSum();

     /**
      * randomOne()
      * Asigna aleatoriamente un número (rango 1000..9999) y calcula la suma de sus 
      * dígitos repetidamente hasta que solo alcances un dígito. Por ejemplo, si el 
      * número aleatorio era 1049, el programa debería imprimir 5
      */

      function randomOne(){
        var nNumber =Math.round(Math.random()*9999)+1000;
        var aNumberInd = nNumber.toString();        
        var nFirstResult = 0;
        aNumberInd.split('')
        for( var i = 0; i<aNumberInd.length; i++){
            nFirstResult+=Number(aNumberInd[i]);
        }
        var aSecondNumberInd = nFirstResult.toString();
        var nFinalResult = 0;
        aSecondNumberInd.split('');
        for(var j = 0; j<aSecondNumberInd.length; j++){
            nFinalResult+=Number(aSecondNumberInd[j]);
        }
        if(nFinalResult>9){
            var aNumberSecondRound = nFinalResult.toString();
            aNumberSecondRound.split('');
            var nSecondFinal = 0;
            for(var x = 0; x<aNumberSecondRound.length; x++){
                nSecondFinal+=Number(aNumberSecondRound[x]);
            }
            return "La suma de los dígitos de " + nNumber + " es igual a " + nFirstResult + " y la suma de ellos es igual a " + nFinalResult + " y a su vez sumará " + nSecondFinal; 
        }else{
            return "La suma de los dígitos de " + nNumber + " es igual a " + nFirstResult + " y la suma de ellos es igual a " + nFinalResult; 
        }        
      }
      randomOne()

      /**
       * randomSmallest()
       * Asigna aleatoriamente dos números e imprime el número más pequeño que es mayor 
       * que uno, de manera que ambos números se dividen entre ellos sin ningún resto. 
       * Por ejemplo, para 9 y 6 debe imprimir 3. Si no hay una, debe imprimirse una 
       * nota adecuada.
       */

       function randomSmallest(){
           var nFirstNumber = Math.round(Math.random()*10);
           var nSecondNumber = Math.round(Math.random()*10);
           var nResult = 0;
           if(nFirstNumber > nSecondNumber && nFirstNumber > 0){
                nResult = Math.round(nFirstNumber/nSecondNumber);
                return "El resultado de dividir " + nFirstNumber + " entre " + nSecondNumber + " es igual a " + nResult;
           }else if (nSecondNumber > nFirstNumber && nSecondNumber > 0){
                nResult = Math.round(nSecondNumber/nFirstNumber);
                return "El resultado de dividir " + nSecondNumber + " entre " + nFirstNumber + " es igual a " + nResult;
           } else {
               return "Cálculo insuficiente"
           }
       }
       randomSmallest();

       /**
        * randomLeastCommon()
        * Aleatoriza dos números e imprime su mínimo común múltiplo. 
        * (utiliza http://en.wikipedia.org/wiki/Least_common_multiple para obtener detalles)
        *  Aleatoriza dos números e imprime su desviación promedio y estándar.
        */

        function randomLeastCommon(){
            var nFirstNumber = Math.round(Math.random()*10);
            var nSecondNumber = Math.round(Math.random()*10);
        }
        randomLeastCommon();


/**
 * Calculator
 * Defina una función llamada calculator() que recibe una operación y dos números y 
 * devuelve el resultado de la operación aplicada a los valores pasados ​​como parámetros
 */


 function calculator(operation, firstNumber, secondNumber){
    switch(operation){
        case "suma":
            return firstNumber + secondNumber;
            break;
        case "resta":
            return firstNumber - secondNumber;
            break;
        case "multiplicacion":
            return firstNumber * secondNumber;
            break;
        case "division":
            return firstNumber / secondNumber;
            break;
    }
 }
 calculator("suma",10,5) // 15
 calculator("resta",10,5) // 5
 calculator("multiplicacion",10,5) // 50
 calculator("division",10,5) // 2

 /**
  * Calculator Plus
  * Defina una función llamada calculator() que recibe una operación y varios números 
  * (pueden ser 2 o 10 o lo que sea) devuelve el resultado de la operación aplicada a 
  * los valores pasados ​​como parámetros
  */

  function calculator(operation, numbers){
      var nResult = numbers[0];
      switch(operation){
        case "suma":
            for(var i = 1; i<numbers.length; i++){
                nResult = nResult + numbers[i];
            }
            return nResult;
            break;
        case "resta":
            for(var i = 1; i<numbers.length; i++){
                nResult = nResult - numbers[i];
            }
            return nResult;
            break;
        case "multiplicacion":
            for(var i = 1; i<numbers.length; i++){
                nResult = nResult * numbers[i];
            }
            return nResult;
            break;
        case "division":
            for(var i = 1; i<numbers.length; i++){
                nResult = nResult / numbers[i];
            }
            return nResult;
            break;
      }
  }
 calculator("suma",[10,5,2,3]) // 20
 calculator("resta",[10,5,1]) // 4
 calculator("multiplicacion",[10,5,2]) // 100
 calculator("division",[10,5]) // 2

 /**
  * getFullName
  * Definir una función llamada getFullName() que recibe un name y un surname y 
  * devuelve la cadena "Su nombre completo es" con el nombre y apellido concatenados
  */

  function getFullName(name, surname){
      return "Su nombre completo es " + name + " " + surname;
  }
  getFullName("Guillermo", "Extremera");

  /**
   * isNumber
   * Definir una función llamada isNumber() que recibe un valor y devuelve true si 
   * el valor recibido es un número
   */

    function isNumber(param){
        var bResult = typeof(param);
        if (bResult === "number"){
            return true;
        } else {
            return false;
        }
    }

/**
 * isString
 * Definir una función llamada isString() que recibe un valor y devuelva true si 
 * el valor recibido es una cadena
 */

 function isString(param){
    var bResult = typeof(param);
    if (bResult === "string"){
        return true;
    } else {
        return false;
    }
 }

/**
 * isBoolean 
 * Definir una función llamada isBoolean() que recibe un valor y devuelva true si 
 * el valor recibido es un valor lógico.
 */

 function isBoolean(param){
    if (param == true || param == false){
        return true;
    } else {
        return false;
    }
 }


/**
 * encodeWord 
 * Definir una función llamada encodeWord() que recibe una cadena y devuelva la 
 * versión codificada de esa cadena de sustitución de los siguientes caracteres:
 * 7 en lugar de T
 * 4 en lugar de A
 * 5 en lugar de S
 * 0 en lugar de O
 */

 function encodeWord(words){
     var sWords = words.split('');
     var aResult = [];
     for( var i = 0; i< sWords.length; i++){
         if(sWords[i] === "T"){
            aResult.push(7);
         }else if (sWords[i] === "A"){
            aResult.push(4);
         }else if (sWords[i] === "S"){
            aResult.push(5);
         }else if (sWords[i] === "O"){
            aResult.push(0);
         } else {
            aResult.push(sWords[i]);
         }
     }
    var sResult = aResult.toString();
    var result = sResult.replace(/[,]/g, '');
    return result;
 }
 encodeWord("TOMA ANIS DEL MONO");

/**
 * encodeWordPlus
 * Mejore la función anterior para agregar un número aleatorio 
 * entre 0 y 1000 cada 7 caracteres
 */

function encodeWordPlus(words){
    var sWords = words.split('');
    var aResult = [];
    for( var i = 0; i<sWords.length; i++){
        if(sWords[i] === "T"){
           aResult.push(7);
        }else if (sWords[i] === "A"){
           aResult.push(4);
        }else if (sWords[i] === "S"){
           aResult.push(5);
        }else if (sWords[i] === "O"){
           aResult.push(0);
        } else if ( i%7 === 0 ){
            aResult.push(sWords[i] + Math.round(Math.random()*1000));
        }else {
           aResult.push(sWords[i]);
        }        
    }
   var sResult = aResult.toString();
   var result = sResult.replace(/[,]/g, '');
   return result;
}
encodeWordPlus("TOMA ANIS DEL MONO");
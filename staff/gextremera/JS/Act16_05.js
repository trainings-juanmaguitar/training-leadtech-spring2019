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

 //Solución JuanMa
var randomEven = () => new Array(Math.ceil(Math.random()*100))
                            .fill(0)
                            .map((_,i) => i) // de esta forma se salta el elemento y pilla el indice
                            .filter(n => !Boolean(n%2)) // esto es igual a .filter(n => n%2 === 0)

var rondom = () => new Array(Math.round(Math.random()*100))
                            .fill(0)
                            .map((e,i)=> e=i)
                            .filter(n => n%2===0)





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

//Opción 2

var randomOdd = () => {
    var nRandomNumber = Math.round(Math.random()*100);    
    console.log(nRandomNumber);
    if( nRandomNumber >= 40){
        new Array(nRandomNumber-1)        
        .fill(0, 39, nRandomNumber.length-1)
        .map((acc, element, index, array) => {
            if (acc%2 !=0){this.push(acc)};
        }, 40)        
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
 * Opción 2
 */

 var randomOddSmallers = () => {
     var nValor = Math.round(Math.random()*100);     
     if (nValor < 40) {
         return new Array(nValor)
         .fill(0)
         .map((e,i) => e = i+1)
     }else{
         var aResult = nValor - 40;
         return new Array(aResult)
         .fill(40)
         .map ((e,i) => e = e + i)
         .filter(n => n = n%2 !==0)
     }
 }

 




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

let total = () => {
    var number = Math.round(Math.random()*9999)+1000;
    console.log(number);
    number.split('');
    console.log(number);
}
total();








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

  function calculator(operation, ...numbers){
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






// Actividad Clase JuanMa

Array(Math.ceil(Math.random()*100))
    .fill(0)
    .map((_,i) => i)
    .filter(n => !Boolean(n%2))






/**
 * randomLargest()
 * Aleatoriza tres números en el rango (0 .. 100) 
 * e imprime el más grande.
 */


var randomLargest = () => new Array(3)
    .fill(0)
    .map(() => Math.round(Math.random()*100))
    .reduce((largest, number, index, array) => {
        //if (index === array.length-1) console.log(array)
        return number > largest ? number : largest
    }, 0)
                


//solución JuanMa

var randomLargest = () => new Array(3)
    .fill(0)
    .map(() => Math.round(Math.random()*100))
    .reduce((largest, number, index, array) => {
        if (index === array.length-1) console.log(array)
        return number > largest ? number : largest
    }, 0)




/**
 * Write a function charFreq() that takes a string and builds a frequency listing of the 
 * characters contained in it. Represent the frequency listing as a Javascript object. 
 * Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab"). 
 */

const charFreq = text => text.split('')
.reduce((oCharFreq, char, index, array) => {
    if (!oCharFreq[char]) oCharFreq[char] = 1
    /**
     * esto es lo mismo que la linea anterior
     * if (!oCharFreq[char]) {
     *  oCharFreq[char] = 1
     * }
     */
    else oCharFreq[char] += 1
    return oCharFreq
}, {})
         
charFreq("abbabcbdbabdbdbabababcbcbab");
//explicación reduce
.reduce(function (acc, element, index, array) => {}, 0) // ejemplo de .reduce


/**
 * Randomizes three numbers in range (0.. 100) and prints the largest one.
 */

const getThreeRandomNumbers = () => 
    new Array(3)
        .fill(0)
        .map(() => Math.round(Math.random()*100))

const largestNumberWay1 = anumbers => 
    anumbers
        .reduce( (largest, number) => 
            number > largest ? number : largest //condición ternaria
        , 0)

const largestNumberWay2 = numbers => Math.max.apply(null,numbers)

const largestNumberWay3 = numbers => numbers.sort((a,b) => a-b).pop()









var text = `The path of the righteous man is beset on all sides by the
iniquities of the selfish and the tyranny of evil men. Blessed is he who, in
the name of charity and good will, shepherds the weak through the valley of
darkness, for he is truly his brother's keeper and the finder of lost
children. And I will strike down upon thee with great vengeance and furious
anger those who would attempt to poison and destroy My brothers. And you will
know My name is the Lord when I lay My vengeance upon thee.

Look, just because I don't be givin' no man a foot massage don't make it right
for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up
the way the nigger talks. Motherfucker do that shit to me, he better paralyze
my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?

Look, just because I don't be givin' no man a foot massage don't make it right
for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up
the way the nigger talks. Motherfucker do that shit to me, he better paralyze
my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?

You think water moves fast? You should see ice. It moves like it has a mind.
Like it knows it killed the world once and got a taste for murder. After the
avalanche, it took us a week to climb out. Now, I don't know exactly when we
turned on each other, but I know that seven of us survived the slide... and
only five made it out. Now we took an oath, that I'm breaking now. We said
we'd say it was the snow that killed the other two, but it wasn't. Nature is
lethal but it doesn't hold a candle to man.

My money's in that office, right? If she start giving me some bullshit about
it ain't there, and we got to go someplace else and get it, I'm gonna shoot
you in the head then and there. Then I'm gonna shoot that bitch in the
kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look
at me when I'm talking to you, motherfucker. You listen: we go in there, and
that nigga Winston or anybody else is in there, you the first motherfucker to
get shot. You understand?

Do you see any Teletubbies in here? Do you see a slender plastic tag clipped
to my shirt with my name printed on it? Do you see a little Asian child with a
blank expression on his face sitting outside on a mechanical helicopter that
shakes when you put quarters in it? No? Well, that's what you see at a toy
store. And you must think you're in a toy store, because you're here shopping
for an infant named Jeb.

Normally, both your asses would be dead as fucking fried chicken, but you
happen to pull this shit while I'm in a transitional period so I don't wanna
kill you, I wanna help you. But I can't give you this case, it don't belong to
me. Besides, I've already been through too much shit this morning over this
case to hand it over to your dumb ass.

Now that we know who you are, I know who I am. I'm not a mistake! It all makes
sense! In a comic, you know how you can tell who the arch-villain's going to
be? He's the exact opposite of the hero. And most times they're friends, like
you and me! I should've known way back when... You know why, David? Because of
the kids. They called me Mr Glass.

Look, just because I don't be givin' no man a foot massage don't make it right
for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up
the way the nigger talks. Motherfucker do that shit to me, he better paralyze
my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?

You think water moves fast? You should see ice. It moves like it has a mind.
Like it knows it killed the world once and got a taste for murder. After the
avalanche, it took us a week to climb out. Now, I don't know exactly when we
turned on each other, but I know that seven of us survived the slide... and
only five made it out. Now we took an oath, that I'm breaking now. We said
we'd say it was the snow that killed the other two, but it wasn't`

const wordsFreq = text => 
    text.split(' ')
    .reduce((oWordsFreq, word, index, array) => {
        var sCleanWord = word.toUpperCase;
        sCleanWord = sCleanWord.replace('.','');
        sCleanWord = sCleanWord.replace(',','');
        sCleanWord = sCleanWord.replace(' ','');
        
        if (!oWordsFreq[word]) oWordsFreq[word] = 1
        else oWordsFreq[word] += 1
        return oWordsFreq
    }, {})
    wordsFreq(text);
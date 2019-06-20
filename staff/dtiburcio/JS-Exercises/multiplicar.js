
/*
Integer Numbers Range
Write a function in Javascript that having two integers x1 and x2 returns all 
the integers between them. If x2 es lower than x1 it should return -1
*/
function integer (x1,x2){
    var rangeBetween = '';
    if (x1 > x2) { return -1}
    for (var i=x1;i<=x2;i++){
        rangeBetween += i + '\t';
    }
    return rangeBetween;
}

/*
Multiplications table
Write a function that writes in the console the multiplication table (from 1 to 10)
*/
function tablaMultiplicar (){
    var result = '\n';
    for (var x=1;x<=10;x++){
        for (var y=1;y<=10;y++){
            result += x * y + '\t';
        }
        result += '\n';
    }
    return result;
}

/**
Multiplications table on demand
Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter
 */

function multiplicarNumeros(x){
    var result = '';
    for (i=1; i<=10; i++){
        result += x * i;
        result += '\n';
    }
    return result;
}

/*
Calculation
Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them
*/

function multiplesOf23(){
    var listMultiples23 = '';
    var sumMultiples23 = 0;
    var messageResult = '';

    for (var i = 23; i < 500; i += 23){
        listMultiples23 += i + '\t';
        sumMultiples23 += i;
    }

    messageResult = "Elements: " + listMultiples23 + "\n" + "Suma: " + sumMultiples23;
    return messageResult;
}

/*
max() function
Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
*/
function max(a,b){
    if (a > b){
        return a;
    }else if (a < b) {
        return b;
    }
    else return "Son iguales";
}

/**
 * maxOfThree() function
Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
 */

function maxOfThree(a,b,c){
    if ((a >= b)&&(a >= c)){
        return a;
    }else if ((b >= a)&&(b >= c)) {
        return b;
    }else ((c >= a)&&(c >= b))
        return c;
}

/**
 * isVowel() function
Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
 */

function isVowel(letra){
    var vocales = ['a','e','i','o','u','A','E','I','O','U']
    for (var i = 0; i <= 10; i++){
        if (letra == vocales[i]) {
            return true;
        }
    }
    return false;
}

/**
 * Hexadecimal
Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code

Hint: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/split

>>> var a = getRGB ('#00FF00');
>>> a;
“rgb(0,255,0)”;
 */

 //000FF => rgb(0,0,255)

var colors = {
    "#FFFFFF" : "Black",
    "#000000" : "White",
    "#FF0000" : "Red",
    "#00FF00" : "Green",
    "#0000FF" : "Blue"
}

 function getRGB (hexColor){
    //Separación 2 en 2
    var redHex = hexColor.substring(1,3);
    var greenHex = hexColor.substring(3,5);
    var blueHex = hexColor.subtring(5,7);

    // Transformación en decimal
    var redDecimal = parseInt(redHex, 16);
    var greenDecimal = parseInt(greenHex, 16);
    var blueDecimal = parseInt(blueHex, 16);

    // Variable resultante
    var result = 'rgb(' + redDecimal + ',' + greenDecimal + ',' + blueDecimal + ')';

    if (colors[hexColor]){
        result += colors[hexColor];
    }

    return result;
}


 /**
  * Hexadecimal enhanced
Improves the previous function so besides the conversion also identifies some basic colors:

Black: #000000
White: #FFFFFF
Red: #FF0000
Green: #00FF00
Blue: #0000FF
So the result can be (for these cases):

>>> var a = getRGB ('#00FF00'); 
>>> a;
“rgb(0,255,0)   verde”;
*/

// Crear función que diga cuantas veces se ha ejecutado
var times = 0;

function howManyTimes(){
    times += 1;
    
    return times;
}

howManyTimes();

// Crear función que diga cuantas veces se ha ejecutado. Sin variables globales.

function getHowManyTimes() {
    var howManyTimes = 0;
    return function(){
        return ++howManyTimes;
    }
}

var howManyTimes = getHowManyTimes();

// Función que pase una password y solo pueda acceder tres veces

var password = setPassword("12345");

function initPassword(password){
    var numTries= 3;
    return function(){
        if (--numtries){
            return "[" + numTries + "] - " + password
        }
        else {
            return "Máximo número de intentos alcanzado"
        }
    }
}

var password = setPassword("12345");
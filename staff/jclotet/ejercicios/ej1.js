/// Calculation
// Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them
// Nomenclatura camelCase

function multiplesOf23() {
  var listMultiples23 = ''
  var sumMultiple23 = 0;
  var messageResult = '';

  for (var i=23; i<500; i += 23) {
    listMultiples23 += i + '\t';
    sumMultiple23 += i;
  }

  messageResult = "List is " + listMultiples23 + " Sum is " + sumMultiple23;

  return messageResult;
}

//Hexadecimal
//Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB 
//representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code

// parseInt("345") ---->>>>> 345
//Admite un segundo parámetro que seria la base
// parseInt("FF", 16) ----->>>> 255

function getRGB(hexColor) {
  var redHex = hexColor.substring(1,3);
  var greenHex = hexColor.substring(3,5);
  var blueHex = hexColor.substring(5,7);

  var redDecimal = parseInt(redHex, 16);
  var greenDecimal = parseInt(greenHex, 16);
  var blueDecimal = parseInt(blueHex, 16);

  return "rgb(" + redDecimal + "," + greenDecimal + "," + blueDecimal + ")" + colors[hexColor];
}

//Hexadecimal enhanced
//Improves the previous function so besides the conversion also identifies some basic colors:

//Black: #000000
//White: #FFFFFF
//Red: #FF0000
//Green: #00FF00
//Blue: #0000FF
//So the result can be (for these cases):

//>>> var a = getRGB ('#00FF00'); 
//>>> a;
//“rgb(0,255,0)   verde”;

var colors = {
  "#000000": "Black",
  "#FFFFFF": "White",
  "#FF0000": "red",
  "#00FF00": "green",
  "#0000FF": "blue", 
}

// Crear funcion que devuelva el valolr de cuantas veces se ha ejecutado

// var count = 0;
// function howManyTimes() {
//   count +=1;
//   return count;
// }

// howManyTimes()

function getHowManyTimes() {
  var howManyTimes = 0;
  return function() {
    return ++howManyTimes;
  }
}

var howManyTimes = getHowManyTimes();

howManyTimes();
howManyTimes();
howManyTimes();
howManyTimes();


// Función que pide password un máximo de 3 veces

var password = setPassword("12345");

function checkPassword() {
  var pass = "54321";
  var ask = prompt("Please enter your passwordd");

  if (ask === pass) {
    return "ok"
  } else {
    count += 1;
  }

}

// Hay que devolver una función que 

function setPassword(pass) {
  var numTries = 3;
  return function() {
    if (--numTries) {
      return "[" + numTries + "] -> " + password;
    } else {
      return "máximo número de intentos";
    }
  }
}

var password = setPassword("12345");

password();


/*
Hexadecimal
Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code
*/
function getRGB (color) {

    var value = color.split('#',6);
    var red = parseInt(value[1].substring(0,2),16);
    var green = parseInt(value[1].substring(2,4), 16);
    var blue = parseInt(value[1].substring(4,6), 16);

    return 'rgb('+red+','+green+','+blue+')';
}

/*

Hexadecimal enhanced
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

function getRGB_enhanced (color) {
    var result;
    var result = getRGB(color);
    var colors = [
        {
            name: "black",
            hexadecimal: "#000000"
        },
        {
            name: "white",
            hexadecimal: "#FFFFFF"
        },
        {
            name: "red",
            hexadecimal: "#FF0000"
        },
        {
            name: "green",
            hexadecimal: "#00FF00"
        },
        {
            name: "blue",
            hexadecimal: "#0000FF"
        }
     ];

   for (var i = 0; i < colors.length; i++) {
       if (color === colors[i].hexadecimal)
            result += ' ' + colors[i].name;
    }
    console.log("Result: "+result);

    return 'rgb('+red+','+green+','+blue+')';
}

/* Mejoras */
var colors = {
    "#000000" : "black",
    "#FFFFFF": "white",
    "#FF0000" : "red",
    "#00FF00": "green",
    "#0000FF" : "blue"
 }

function getRGB_enhanced (color) {

    var value = color.split('#',6);
    var red = parseInt(value[1].substring(0,2),16);
    var green = parseInt(value[1].substring(2,4), 16);
    var blue = parseInt(value[1].substring(4,6), 16);

    var result =  'rgb('+red+','+green+','+blue+')';
    if (colors[color]) return result += colors[color];
    else return result;
}


/* Función que cuenta cuantas veces se ejectuta */


function getHowManyTimes() {
    var howManyTimes = 0
    return function() {
        return ++howManyTimes
    }
}

var howManyTimes = getHowManyTimes();

howManyTimes() //1
howManyTimes() //2
howManyTimes() //3


/* ---- */

var password = setPassword("12345")
password() //[3] -> 12345
password() //[2] -> 12345
password() //[1] -> 12345
password() //Máximo de intentos




function setPassword(password) {
    var numTries = 3;
    return function() {
        if (--numTries) {
            return "[" + numTries + "] -> " + password;
        } 
        else {
            return "Máximo intentos"
        }
    }
}

var password = setPassword("12345")
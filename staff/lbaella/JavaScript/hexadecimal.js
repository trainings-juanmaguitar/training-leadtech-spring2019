/*
Hexadecimal
Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code
*/
function getRGB (color) {

    var value = color.split('#',6);
   //console.log(value);
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
    return result;
}

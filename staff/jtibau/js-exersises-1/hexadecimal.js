//Hexadecimal
//Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code
var colors ={
    '#000000': 'Black',
    '#FFFFFF': 'white',
    '#FF0000': 'red',
    '#00FF00': 'green',
    '#0000FF':  'blue'
} 
function getRGB(hexColor){
    var red = parseInt(hexColor.substring(1,3),16);
    var green = parseInt(hexColor.substring(3,5),16);
    var blue = parseInt(hexColor.substring(5,7),16);

    var result= 'rgb(' + red + ',' + green + ',' + blue +')';
    if (colors[hexColor]){
        result += colors[hexColor]
    }
    return result 
}

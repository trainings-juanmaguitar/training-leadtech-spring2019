/*
Hexadecimal
Writes a function that convert a hexadecimal color, 
"blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". 
Give the function the name getRGB() and test it with this code
*/

function getRGB(x){
  var first = parseInt(x.substring(1, 3),16);
  var second = parseInt(x.substring(3, 5),16);
  var third = parseInt(x.substring(5, 7),16);
  var result='rgb('+ first +', '+ second +', '+ third +')';
  return result;
}

console.log(getRGB('#000000'));
console.log(getRGB('#FFFFFF'));
console.log(getRGB('#FF0000'));
console.log(getRGB('#00FF00'));
console.log(getRGB('#0000FF'));
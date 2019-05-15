/*
Hexadecimal enhanced
Improves the previous function so besides the conversion also 
identifies some basic colors:
*/

function getRGB(x){
  var first = parseInt(x.substring(1, 3),16);
  var second = parseInt(x.substring(3, 5),16);
  var third = parseInt(x.substring(5, 7),16);
  var result='rgb('+ first +', '+ second +', '+ third +')';
  switch(result){
    case 'rgb(0, 0, 0)':
      return result +=' , black';
    case 'rgb(255, 255, 255)':
      return result +=' , white';
    case 'rgb(255, 0, 0)':
      return result +=' , red';
    case 'rgb(0, 255, 0)':
      return result +=' , green';
    case 'rgb(0, 0, 255)':
      return result +=' , blue';
    default:
      return result +=' , i don\'t know the color';
  }
}

console.log(getRGB('#000000'));
console.log(getRGB('#FFFFFF'));
console.log(getRGB('#FF0000'));
console.log(getRGB('#00FF00'));
console.log(getRGB('#0000FF'));
console.log(getRGB('#67deFF'));
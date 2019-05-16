//Hexadecimal
//Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code

var arrayColor = [];
var arrayRGB = [];
function getRGB(color){
    var hexa = color.split('#')[1];
    for (i=0; i<hexa.length; i+=2){
        arrayColor.push(hexa.substring(i, i+2)); 
    }
    for (j=0; j<arrayColor.length; j++){
        arrayNumber = arrayColor[j].split('');
        for (x=0; x<arrayNumber.length; x++){
          arrayNumber[x] = ChangeLetter(arrayNumber[x]);
        }
        arrayRGB.push(arrayNumber[0]*16 + arrayNumber[1]);
    }
    return `rgb(${arrayRGB[0]}, ${arrayRGB[1]}, ${arrayRGB[2]})`;
}

function ChangeLetter(letter){
    switch (letter){
        case "A": 
            letter = 10;
            break;
        case "B": 
            letter = 11;
            break;
        case "C": 
            letter = 12;
            break;
        case "D": 
            letter = 13;
            break;
        case "E": 
            letter = 14;
            break;
        case "F": 
            letter = 15;
            break;                                                                                                            
    }
    return letter;
}


var a = getRGB('#0FAA0F');
console.log(a);

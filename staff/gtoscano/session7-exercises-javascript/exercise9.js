var arrayColor = [];
var arrayRGB = [];
var basicColor = false;
var text = ""; 
function getRGB(color){
    TextColor(color);
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
    if (basicColor){
        result = `rgb(${arrayRGB[0]}, ${arrayRGB[1]}, ${arrayRGB[2]}) ${TextColor(color)}`; 
    }else{
        result = `rgb(${arrayRGB[0]}, ${arrayRGB[1]}, ${arrayRGB[2]})`;
    }
    return result;
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

function TextColor(color){
    switch (color){
        case "#000000": 
            basicColor = true;
            text = "Black";
            break;
        case "#FFFFFF": 
            basicColor = true;
            text = "White";
            break;
        case "#FF0000": 
            basicColor = true;
            text = "Red"
            break;
        case "D#00FF00": 
            basicColor = true;
            text = "Green"
            break;
        case "#0000FF": 
            basicColor = true;
            text = "Blue"
            break;                                                                                                        
    }
    return text;
} 


var a = getRGB('#0FAA0F');
console.log(a)

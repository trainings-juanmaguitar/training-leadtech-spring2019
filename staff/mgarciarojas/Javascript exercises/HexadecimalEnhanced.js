//Hexadecimal enhanced
//Improves the previous function so besides the conversion also identifies some basic colors:

function getRGBcolor(hexaColor){
    var hexadecimal=hexaColor;
    var rgb="rgb (";
    for (var i =1; i<7; i=i+2){
     if (hexadecimal[i]=='F' && hexadecimal[i+1]=='F'){
         rgb+="255,";
        
     }else{
         rgb+="0,";
     }
    }
     rgb=rgb.substr(0, rgb.length-1);
    var rgbArray = rgb.split(',');
    var color="";
    if (rgbArray[0].includes('0')){
       if(rgbArray[1].includes('0')){
            if (rgbArray[2].includes('0')){
                color="Black";
            }else{
                color = "Blue";
            }
       }else{
           color = "Green";
       } 
    }else if (rgbArray[2].includes('0')){
        color= "Red";
    }else{
        color= "White";
    }
    rgb+=") "+color;
    return rgb
 }
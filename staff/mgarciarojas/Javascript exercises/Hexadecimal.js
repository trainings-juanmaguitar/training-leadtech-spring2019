//Hexadecimal
//Writes a function that convert a hexadecimal color, "blue" for example
// "#0000FF" in its RGB representation rgb(0,0,255)". 
//Give the function the name getRGB() and test it with this code

function getRGB(hexaColor){
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
   rgb+=")";
   return rgb
}


function getRGBenhanced(hexaColor){
    var hexadecimal=hexaColor;
    var rgb="rgb (";
    for (var i =1; i<7; i=i+2){
     if (hexadecimal.substring(i,i+2)=='FF'){
         rgb+="255,";
        
     }else{
         rgb+="0,";
     }
    }
     rgb=rgb.substr(0, rgb.length-1);
    rgb+=")";
    return rgb
 }
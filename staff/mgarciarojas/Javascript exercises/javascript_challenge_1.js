//Integer Numbers Range
//Write a function in Javascript that having two integers x1 and x2 returns all the integers between them.
// If x2 es lower than x1 it should return -1

function numbersBetween (a, b){
    var rangeNetween="";
    if (a > b) {return -1 }
     for (var i=a; i<=b; i++) {
        rangeNetween += i + '\t';
        }
    return rangeNetween;
}


//Multiplications table
//Write a function that writes in the console the multiplication table (from 1 to 10)

function multiplicationTable (){
    var numero;
    var tabla="";
    for (i=1; i<=10;i++) {
        for (k=1; k<=10;k++){
             numero = (i*k)
           tabla+=numero + "\t";
        }
        tabla+="\n"
    }   
    return tabla  
}

// Multiplications table on demand
//Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter

function multiplicationTableOnDemand(RequestedNumber){
 for (i=1; i<=10; i++){
     console.log(RequestedNumber*i)
 }
}

//Calculation
//Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

function calculation(){
    var acc=0;
    var table=""
    for (i=0; i<500; i++){
        if (i%23 == 0){
            table+=i+ "\t"
           acc+=i
        } 
    }
    return table
    return acc       

}

//alternativa
function calculation(){
    var acc=0;
    var table=""
    for (i=0; i<500; i+=23){
           table+=i+ "\t"
           acc+=i
        } 
    
    return table
    return acc       

}

//max() function
//Define a function max() that takes two numbers as arguments and returns
// the largest of them. Use the if-then-else construct available in Javascript.

function max (a, b){
if (a > b){
console.log(a)
}else{
console.log(b)
}
}

//maxOfThree() function
//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(a,b,c) {
if (a>b){
    if (a>c && a!=b){
        return console.log(a)
    }else{
        if(a==b || a==c){
         return console.log(a)
        }
        return console.log(c)
    }

} else{
    if (b>c){
        return console.log(b)
    } else{
        return console.log(b);
    }
    
}

}

function isVowel(letter){
    switch (letter){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        console.log(letter + "es una vocal");
        break;
        default:
        console.log(letter + "no es una vocal");
        break;
    }
  

}
//Alternativas
function isVowel(letter){
   return ['a','e','i','o','u'].includes(letter)
  

}

//Hexadecimal
//Writes a function that convert a hexadecimal color, "blue" for example
// "#0000FF" in its RGB representation rgb(0,0,255)". 
//Give the function the name getRGB() and test it with this code

function getRGB(hexaColor){
    var result;
if (hexaColor[1]=='0'){
 result +='rgb(0'
}else{

}
 if (hexaColor[3]=='F'){

}
    
}


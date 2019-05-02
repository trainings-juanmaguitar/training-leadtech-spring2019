//Integer Numbers Range
//Write a function in Javascript that having two integers x1 and x2 returns all the integers between them.
// If x2 es lower than x1 it should return -1

function NumbersBetween (a, b){
    if (a < b) {
        for (i=a+1; i<b; i++) {
            console.log(i)
        }
    }else{
        console.log (-1)
    }
    
}

//Multiplications table
//Write a function that writes in the console the multiplication table (from 1 to 10)

function MultiplicationTable (){
    var numero;
    var tabla="";
    for (i=1; i<=10;i++) {
        for (k=1; k<=10;k++){
             numero = (i*k)
           tabla+=" "+numero
        }
        tabla+="\n"
    }   
    console.log(tabla)  
}

// Multiplications table on demand
//Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter

function MultiplicationTableOnDemand(RequestedNumber){
 for (i=1; i<=10; i++){
     console.log(RequestedNumber*i)
 }
}

//Calculation
//Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

function Calculation(){
    var acc;
    for (i=1; i<500; i++){
        if (i%23 == 0){
            console.log (i)
            acc +=i;
        }
    }
    
}
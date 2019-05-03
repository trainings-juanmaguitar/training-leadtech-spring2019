//Integer Numbers Range
//Write a function in Javascript that having two integers x1 and x2 returns all the integers between them.
// If x2 es lower than x1 it should return -1

function numbersBetween (a, b){
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

function multiplicationTable (){
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

function multiplicationTableOnDemand(RequestedNumber){
 for (i=1; i<=10; i++){
     console.log(RequestedNumber*i)
 }
}

//Calculation
//Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

function calculation(){
    var acc=null;
    var table=""
    for (i=0; i<500; i++){
        if (i%23 == 0){
            
            table+=" "+i
           acc+=i
        } 
    }
    console.log (table)
    console.log(acc)       

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

function maxOfThree(a, b, c){
    if (a>b){
        if (a>c){
            console.log(a)
        }
    }else{
        if (b>c){
            console.log(b)
        }else{
            console.log(c)
        }
    }
}

//isVowel() function
//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(letter){
    if (letter=='a' || letter=='e'|| letter =='i' || letter == 'u' || letter == 'o'){
        console.log(true)
    }else{
        console.log(false)
    }
}
//Ejercicio5
//Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function max(number1, number2){
    var largest = 0;
    if (number1 > number2 ){
        largest = number1;
    } else {
        largest = number2;
    } 
    return largest;
}

console.log(max(23, 25));
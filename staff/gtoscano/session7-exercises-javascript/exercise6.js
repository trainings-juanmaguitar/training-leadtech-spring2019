//Ejercicio6
//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxofThree(number1, number2, number3){
    var largest = 0;
    if (number1 >= number2 ){
        largest = number1;
    } else {
        largest = number2;
    } 
    if (largest <= number3){
        largest = number3;
    } 
    return largest;
}

console.log(maxofThree(23, 23, 45))
/*
sum() & multiply()
Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
*/

function sum(numbers) {
    var result= 0;
    for (var i=0; i< numbers.length; i++) {
        result = result + parseInt(numbers[i])
    }
    return result;
}

function multiply(numbers) {
    var result= 1;
    for (var i=0; i< numbers.length; i++) {
        result = result * parseInt(numbers[i])
    }
    return result;
}
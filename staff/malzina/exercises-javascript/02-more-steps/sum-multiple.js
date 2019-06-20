/*
Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
*/

function sum( numbers ) {
    var sum = 0;
    for(i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
    }
    return sum
}

function multiply( numbers ) {
    var mult = 0;
    for(i = 0; i < numbers.length; i++) {
        mult = mult * numbers[i]
    }
    return mult
}
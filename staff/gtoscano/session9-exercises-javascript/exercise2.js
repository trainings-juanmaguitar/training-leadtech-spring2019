//Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum(arrayNumbers){
    var result = 0;
    arrayNumbers.forEach(element => result += element);
    return result;
}

function multiply(arrayNumbers){
    var result = 1;
    arrayNumbers.forEach(element => result *= element);
    return result;
}

a = sum([1,2,3,4,5])
b = multiply([1,2,6,7]) 
console.log(a)
console.log(b)
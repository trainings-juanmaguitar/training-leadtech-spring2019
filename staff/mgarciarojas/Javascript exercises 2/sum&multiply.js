/**
 * 
sum() & multiply()
Define a function sum() and a function multiply() that sums and multiplies (respectively) 
all the numbers in an array of numbers. For example, sum([1,2,3,4])
 should return 10, and multiply([1,2,3,4]) should return 24.
 */

 function sum(arrayNumbers){
   var resultSumNumbers=0
    for (var i=0; i<arrayNumbers.length; i++) {
        resultSumNumbers += arrayNumbers[i];
    }
    return resultSumNumbers
}

function multiply(arrayNumbers){
    var resultMultiplyNumbers=0
    for (var i=0; i<arrayNumbers.length; i++) {
        if(i==0){
            resultMultiplyNumbers = arrayNumbers[i];
        }else{
            resultMultiplyNumbers *= arrayNumbers[i];
        }
        
    }
    return resultMultiplyNumbers
}
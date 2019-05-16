/*
sum() & multiply()
Define a function sum() and a function multiply() that sums and multiplies (respectively) 
all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, 
and multiply([1,2,3,4]) should return 24.
*/

function sum(array){
  var result = 0;
  for(var i=0; i<array.length; i++){
    result += array[i]
  }
  return result;
}

console.log(sum([1,2,3,4]));

function multiply(array){
  var result = 1;
  for(var i=1; i<array.length; i++){
    result *= array[i]
  }
  return result;
}

console.log(multiply([1,2,3,4]));
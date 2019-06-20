/*
Calculation
Write a program that writes in the console all the multiples 
of 23 less than 500 and at the end writes the sum of all of them
*/

var multiples = '';
var sum = 0;
for(var i = 23; i < 500; i+=23) {  
    multiples += i + '  ';
    sum += i;
}

console.log('Elements : '+ multiples);
console.log('Sum : '+ sum);
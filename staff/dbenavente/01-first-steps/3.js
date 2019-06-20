/*
Multiplications table on demand
Write a function that writes in the console the multiplication 
table (in one column) of any number passed as parameter
*/

function multiplicationTable(x){
  var numRow = '\n';
  for(var i = 1; i <= 10; i++) {  
    numRow += x+'x'+i+'='+(i*x)+'\n'; 
  } 
  return numRow;
}

console.log(multiplicationTable(7));
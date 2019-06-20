/*
Multiplications table
Write a function that writes in the console the 
multiplication table (from 1 to 10)
*/

function multiplicationTable(){
  var numCell = '\n';
  for(var i = 1; i <= 10; i++) { 
    for(var j = 1; j <= 10; j++) { 
      numCell += (i*j) +'\t '; 
    } 
    numCell+= '\n';
  }
  return numCell;
}

console.log(multiplicationTable());

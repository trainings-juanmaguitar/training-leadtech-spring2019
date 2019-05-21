/*
max() function
Define a function max() that takes two numbers as arguments 
and returns the largest of them. Use the if-then-else construct 
available in Javascript.
*/

function max(x,y){
  if(x>y){
    return x +' es el mayor';
  }else if(x<y){
    return y +' es el mayor';
  }else{
    return 'Son iguales';
  }
}

console.log(max(1,2));
console.log(max(5,1));
console.log(max(2,2));
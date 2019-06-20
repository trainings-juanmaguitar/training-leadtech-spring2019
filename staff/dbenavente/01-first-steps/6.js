/*
maxOfThree() function
Define a function maxOfThree() that takes three numbers 
as arguments and returns the largest of them.
*/

function maxOfThree(x,y,z){
  var max = 0; 
  if(x>y){
    max = x;
    if (max >= z){
      return x +' es el mayor';
    }else{
      return z +' es el mayor';
    }
  }else{
    if(y>x){
      max = y;
      if (max >= z){
        return y +' es el mayor';
      }else{
        return z +' es el mayor';
      }
    }else{
      return x +' es el mayor';
    }
  }
}

console.log(maxOfThree(1,2,3));
console.log(maxOfThree(5,1,3));
console.log(maxOfThree(5,7,3));
console.log(maxOfThree(2,2,2));
console.log(maxOfThree(1,2,2));
console.log(maxOfThree(2,1,2));
console.log(maxOfThree(2,2,1));
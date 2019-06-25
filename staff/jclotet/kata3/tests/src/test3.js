function fizzBuzz() {
  const result = new Array(100)
    .fill(1)
    .map((elem, index, array)=>{
      if ((index+1)%3 === 0 && (index+1)%5 === 0) return 'fizzBuzz';
      else if ((index+1)%3 === 0) return 'fizz';
      else if ((index+1)%5 === 0) return 'buzz'
      else return index+1;
    });
  return result;
}
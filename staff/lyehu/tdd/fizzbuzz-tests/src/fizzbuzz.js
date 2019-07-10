function fizzbuzz() {
  return new Array(100).fill().map((_, i) => i + 1)
    .map((value) => {
      if (value % 3 === 0 && value % 5 === 0) return "FizzBuzz";
      if (value % 3 === 0) return "Fizz";
      if (value % 5 === 0) return "Buzz";
      return value;
    });
}

console.log(fizzbuzz());
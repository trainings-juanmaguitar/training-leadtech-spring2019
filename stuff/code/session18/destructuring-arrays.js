var [a, b] = [1, 2];
console.log(a, b);
//=> 1 2

// --------------

// Use from functions, only select from pattern
var foo = () => [1, 2, 3];

var [a, b] = foo();
console.log(a, b);
// => 1 2

/// ---------

// Omit certain values
var [a, , b] = [1, 2, 3];
console.log(a, b);
// => 1 3


// ---------


// Swap variables easily without temp
var a = 1, b = 2;
[b, a] = [a, b];
console.log(a, b);
// => 2 1

// ---------


// Advance deep arrays
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log("a:", a, "b:", b, "c:", c, "d:", d);
// => a: 1 b: 2 c: [ [ 3, 4 ], 5 ] d: 6





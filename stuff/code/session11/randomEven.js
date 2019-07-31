
/* Randomizes a number (range 0..100), then prints all the even numbers 
from 0 to the randomized. */

even => pares
odd => impares

var randomEven = () => new Array(Math.ceil(Math.random()*100))
							.fill(0)
							.map((_,i) => i)
							.filter(n => n%2 === 0)




	// .filter(n => !Boolean(n%2))


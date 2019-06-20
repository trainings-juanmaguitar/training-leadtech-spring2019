/* Randomizes three numbers in range (0.. 100) and prints 
the largest one. */

var randomLargest = () => new Array(3)
	.fill(0)
	.map(() => Math.round(Math.random()*100))
	.reduce((largest, number, index, array) => {
		if (index === array.length-1) console.log(array)
		return number > largest ? number : largest
	}, 0)

randomLargest()


/* Integer Numbers Range Write a function in Javascript that having two
integers x1 and x2 returns all the integers between them. If x2 es lower than
x1 it should return -1 */

function integersRange(x1, x2) {
	if (x2 < x1) return -1
	for (var i=x1; i<=x2; i++) {
		console.log(i)
	}
}

/* Write a function that writes in the console the multiplication table (from
/* 1 to 10) */

function multiplicationTable() {
	var totalTable = '\n'
	for (var i=1; i<=10; i++) {
		for (var j=1; j<=10; j++) {
			totalTable += i*j + '\t'
		}
		totalTable += '\n'

	}
	console.log(totalTable)
}

/* Write a function that writes in the console the multiplication table (in
/* one column) of any number passed as parameter */

function multiplicationTablePerNumber(number) {
	var totalTable = '\n'
	for (var i=1; i<=10; i++) {
		totalTable += i*number + '\n'
	}
	console.log(totalTable)
}

/* Write a program that writes in the console all the multiples of 23 less
/* than 500 and at the end writes the sum of all of them */

function multiples23() {
	var multiples23 = ''
	var sumMultiples23 = 0
	for (var i=23; i<500; i++) {
		if (i%23 === 0) {
			multiples23 += i + '\t'
			sumMultiples23 += i
		}
	}
	console.log(multiples23)
	console.log(sumMultiples23)
}

/* Define a function max() that takes two numbers as arguments and returns the
largest of them. Use the if-then-else construct available in Javascript. */

function max(num1, num2) {
	if (num1 > num2) return num1
	else return num2
}

/* Write a function that takes a character (i.e. a string of length 1) and
/* returns true if it is a vowel, false otherwise. */

function isVowel(vowel) {
	return ['a','e','i','o','u'].includes(vowel)
}

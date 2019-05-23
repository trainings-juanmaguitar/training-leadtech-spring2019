//sum() & multiply()
//Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum(e){
    var total = 0;
	for (var i = 0; i < e.length; i++) {
		total += e[i];
	}
	return total;
}
function multiply(e){
    var total = 1;
	for (var i = 0; i < e.length; i++) {
		total = (total * e[i]);
	}
	return total;
}

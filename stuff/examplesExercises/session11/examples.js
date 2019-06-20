new Array(Math.ceil(Math.random()*100)).fill(0).map((_,i) => i).filter(n => !Boolean(n%2))

function sum(a,b) { return a+b }
var sum = function (a,b) { return a+b}

var double = a => a*2
var sum = (a,b) => a+b

var doubleAndLog = a => {
	console.log("doubling...")
	return a*2
}
var sumAndLog = (a,b) => {
	console.log("doubling...")
	return a+b
}




(arg1, arg2, ...) => expr
(arg1, arg2, ...) => { stmt1; stmt2; ... }
singleArg => expr
singleArg => { stmt1; stmt2; ... }


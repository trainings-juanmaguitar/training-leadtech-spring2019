howManyTimes() // 1
howManyTimes() // 2
howManyTimes() // 3
howManyTimes() // 4

function getHowManyTimes() {
	let howManyTimes = 0
	return function() {
		return ++howManyTimes
	}
}

var howManyTimes = getHowManyTimes()
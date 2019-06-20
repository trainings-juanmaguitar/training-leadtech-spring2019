a = "Bye!"
function F() {
	var a = "Hello"
	return function() {
		return a
	}
}

var n = F()

n = function() {
		return a
	}
n() //
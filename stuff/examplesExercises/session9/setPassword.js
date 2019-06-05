var password = setPassword("12345")
password() // "[3] → 12345"
password() // "[2] → 12345"
password() // "[1] → 12345"
password() // "maximo num intentos alcanzado"


function setPassword( password ) {
	var numTries = 3
	return function() {
		if (--numTries) {
			return "[" + numTries + "] → " + password
		}
		else {
			return "maximo num intentos alcanzado"
		}
	}
}

var password = setPassword("12345")
	
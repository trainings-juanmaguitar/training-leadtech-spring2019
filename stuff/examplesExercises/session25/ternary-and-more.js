function sayHi(name='juanma') {
	const moreThanForty = true

	const message = moreThanForty ? 'Hello elder!' : 'Hello young!'
	const greeting = name && `Hello ${name}`	

	return name ? greeting : message
}

sayHi()
sayHi('paco')
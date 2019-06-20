function Person(name, city) {
	this.name = name
	this.city = city	
}

Person.prototype.sayHi = function() {
	return `Hi I'm "${this.name} and I live in ${this.city}`
}

// ---------------

class Person {
	constructor(name, city) {
		this.name = name
		this.city = city	
	}

	sayHi() {
		return `Hi I'm "${this.name} and I live in ${this.city}`
	}
}



const me = new Person("juanma", "larnaca")
const you = new Person("paco", "madrid")
const him = new Person("raul", "barna")

me → { name: "juanma", city: "larnaca" }

// -----------------

class Person {
	constructor(name, city) {
		this.name = name
		this.city = city	
	}

	sayHi() {
		return `Hi I'm "${this.name} and I live in ${this.city}`
	}
}

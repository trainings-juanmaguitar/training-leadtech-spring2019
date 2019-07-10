var me = {
	name: "juanma",
	city: "barcelona"
}

// --------------

var me = {}
me.name = "juanma"
me.city = "barcelona"

// --------------

function createMe() {
	return {
		name: "juanma",
		city: "barcelona"
	}
}
var me = createMe()

// --------------

function createMe(argName, argCity) {
	return {
		name: argName,
		city: argCity
	}
}

var me = createMe("juanma", "barcelona")


// --------------

function Person(name, city) {
	this.name = name
	this.city = city
}

Person.prototype.sayHi() {
	return "Hello! I'm " + this.name
}

var me = new Person("juanma", "barcelona")

{ name: "juanma", city: "barcelona" }

me.name
me.city
me.sayHi()




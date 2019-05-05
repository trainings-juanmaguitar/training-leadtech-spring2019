var me = {
	age: 43,
	name: 'juanma'
}

// ------------------

var me = {}
me.age = 43
me.name = 'juanma'

// ------------------

function createMe() {
	return {
	  age: 43,
	  name: 'juanma'
	}
}
var me = createMe()

// ------------------

function createMe(age, name) {
	return {
	  age: age,
	  name: name
	}
}
var me = createMe(43, 'juanma')

// ------------------

function Person(age, name) {
	this.age = age
	this.name = name
}

Person.prototype.sayHi = function() {
	console.log('Hi!')
}

var me = new Person(43, 'juanma')

// ------------------




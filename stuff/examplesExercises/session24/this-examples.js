-- this --

var o = {
	name: 'juanma',
	sayHi: function() {
		return `Hello I'm ${this.name}`
	}
}

----------

function Person(name, city) {
	this.name = name
	this.city = city
}

Person.prototype.sayHi = function() {
	return `Hello I'm ${this.name} and I live in ${this.city}`
}

const me = new Person('juanma','larnaca')
me.name
me.city
me.sayHi()

const her = new Person('lucia','madrid')
her.name
her.city
her.sayHi()

-----------------

class Person {
	constructor() {
		this.name = name
		this.city = city	
	}

	sayHi() {
		return `Hello I'm ${this.name} and I live in ${this.city}`	
	}
}

const me = new Person('juanma','larnaca')
me.name
me.city
me.sayHi()

const her = new Person('lucia','madrid')
her.name
her.city
her.sayHi()

-----------------

const button = document.getElementById('my-button')
button.addEventListener('click', function(e) {
	console.log(this)
	console.log('button clicked')
})


function Person(name, city) {
	this.name = name
	this.city = city
}
Person.prototype ==> {}
Person.prototype.sayHi = () => `Hi I'm ${this.name}`

const me = new Person("juanma", "barcelona")
const you = new Person("paco", "madrid")

me.name
me.sayHi() // Hi I'm juanma
you.sayHi() // Hi I'm paco

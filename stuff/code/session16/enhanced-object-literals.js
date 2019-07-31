const me = {
	name: 'juanma',
	city: 'barcelona',
	sayHi: () => `Hi! I'm ${this.name}`
}

////

const name = 'juanma'
const city = 'barcelona'
const sayHi = () => `Hi! I'm ${this.name}`

const greetings = {
	sayHi: () => `Hi! I'm ${this.name}`,
	sayBye: () => `Bye! But I still am ${this.name}`	
}

const me = { 
	name,
	city,
	sayHi,
	__proto__: greetings,
	[`${name}---${city}`] : 878392374923,
}

me[name+'-'+city] = 878392374923



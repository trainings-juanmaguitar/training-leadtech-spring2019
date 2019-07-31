
var o = {
	name: 'juanma',
	sayHi: function(city, country) {
		return `Hello I'm ${this.name} and I live in ${city} in ${country}`
	},

}

o.sayHi("barcelona", "spain")

o.sayHi.apply({ name: "lucia" }, ["madrid", "spain"] )
o.sayHi.call({ name: "paco" }, "barcelona", "spain" )

var o2SayHi = o.sayHi.bind({ name: "antonio" })

o2SayHi("barcelona", "spain")
o2SayHi.apply({ name: "lucia" }, ["madrid", "spain"] )
o2SayHi.call({ name: "paco" }, "barcelona", "spain" )

var o3SayHi = o2SayHi.bind({ name: "carlos" })


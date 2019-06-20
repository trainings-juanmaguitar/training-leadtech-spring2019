var me = {
	name: "juanma",
	sayHi: function(city) {
		return "I'm " + this.name + " and I'm in " + city
	}
}

me.sayHi("barcelona") // I'm juanma and I'm in barcelona

me.sayHi.call({ name: "paco" }, "barcelona") // I'm paco
me.sayHi.apply({ name: "paco" }, ["barcelona"]) // I'm paco
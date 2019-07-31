var me = {
	name: "juanma",
	city: "barcelona"
}
var a = 23
var client = {a, me, bank: "ING"}

client → {
	a: 23,
	bank: "ING",
	me: {
		name: "juanma",
		city: "barcelona"
	}
}
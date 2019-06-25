var n = 123.456
typeof n === "number" // true

n.toFixed(1) // "123.5"
typeof n.toString() === "string" // true

var nAge = 34
typeof nAge.toString() === "string" // true
typeof (nAge+"") === "string" // true

var sAge = "34"

typeof Number(sAge) === "number" // true
typeof (sAge*1) === "number"
typeof parseInt(sAge, 10) === "number"

var name = "JuanMa"
name.toLowerCase() // "juanma"
name.toUpperCase() // "JUANMA"
name.charAt(0) // "J"
name[0] // "J"

"Javascript is the best language in the world".indexOf("the")

"Javascript is the best language in the world".split(" ")





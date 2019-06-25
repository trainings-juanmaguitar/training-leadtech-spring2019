"hello" 

{
	h: 1,
	e: 1;
	l: 2,
	o: 1
}

var o = {}
o["h"] // undefined

const charFreq = text => 
	text.split('')
		.reduce((oCharFreq, char, index, array) => {
			if (!oCharFreq[char]) oCharFreq[char] = 1
			else oCharFreq[char] += 1
			return oCharFreq
		}, {})

acc = {}
acc.name = "juanma"
acc = { name: "juanma" }

var propName = "city"
var valueProp = "barcelona"

acc[propName] = valueProp

acc = { 
	name: "juanma",
	city: "barcelona"
}



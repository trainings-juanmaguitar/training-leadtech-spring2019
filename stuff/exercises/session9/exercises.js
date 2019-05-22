/*
Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them
*/

function multiplesOf23() {
	var listMultiples23 = ''
	var sumMultiples23 = 0

	for (var i=23; i<500; i+=23) {
		listMultiples23 += i + '\t'
		sumMultiples23 += i
	}
	return [listMultiples23, sumMultiples23]
}

var result = multiplesOf23()
console.log(result[0])
console.log(result[1])


/* Writes a function that convert a hexadecimal color, "blue" for example
"#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name
getRGB() and test it with this code */

#0000FF => "rgb(0,0,255)
getRGB()

parseInt("345") => 345

parseInt("00", 16) => 0
parseInt("00", 16) => 0
parseInt("FF", 16) => 255


var colors = {
	"#000000" : "Black",
	"#FFFFFF" : "White",
	"#FF0000" : "Red",
	"#00FF00" : "Green",
	"#0000FF" : "Blue"
}


function getRGB(hexColor) {
	var redHex = hexColor.substring(1,3)
	var greenHex = hexColor.substring(3,5)
	var blueHex = hexColor.substring(5,7)

	var redDecimal = parseInt(redHex, 16)
	var greenDecimal = parseInt(greenHex, 16)
	var blueDecimal = parseInt(blueHex, 16)

	var result = "rgb(" + redDecimal + "," + greenDecimal + "," + blueDecimal + ") "
	if (colors[hexColor]) {
		result += colors[hexColor]
	}
	return result
}




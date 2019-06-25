function (a=0,b=0) {
	return a+b
}



const sum = (a=0, b=0) => a + b

sum(2,3) // 5
sum(2) // 2
sum() // 0

var array = [1,2]
var a = array[0]
var b = array[1]

var [a,b,c=0] = [1,2]
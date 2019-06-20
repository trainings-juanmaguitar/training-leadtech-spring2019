//Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40, print all the numbers down to the randomized one (i.e. if the result was 37, you should print: 40, 39, 38, 37)

function randomOddSmallers(){
    var aNumbers = []
    var nAleatoryNum = Math.random() * 100
    if (nAleatoryNum <= 40) {
        for (var i=40; i>nAleatoryNum; i--){
            aNumbers.push(i)
        }
    } else {
        for (var i=41; i<nAleatoryNum; i+=2){
            aNumbers.push(i)
        }
    } 
    return aNumbers
}

var aRandomOddSmallers = randomOddSmallers()
console.log(aRandomOddSmallers)

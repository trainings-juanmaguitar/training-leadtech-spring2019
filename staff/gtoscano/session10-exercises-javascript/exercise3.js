//Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40 nothing should be printed

function randomOdd(){
    var aNumbers = []
    var nAleatoryNum = Math.random() * 100
    if (nAleatoryNum < 40) {return "El núemro es menor que 40"} 
    for (var i=41; i<nAleatoryNum; i+=2){
        aNumbers.push(i)
    }
    return aNumbers
}


var aOddNumbers = randomOdd()
console.log(aOddNumbers)

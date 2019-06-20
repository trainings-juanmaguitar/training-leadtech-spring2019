//Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.

function randomEven(){
    var aNumbers = []
    var nAleatoryNum = Math.random() * 100
    for (var i=0; i<nAleatoryNum; i+=2){
        aNumbers.push(i)
    }
    return aNumbers
}


var aEventNumbers = randomEven()
console.log(aEventNumbers)



//Randomizes three numbers in range (0.. 100) and prints the largest one.

function minAaleatoryNumber(){
    var  aAleatoryNumber = [];
    for (var i=0; i<3; i++){
       aNumber.push(Math.random() * 100)
    }
    return Math.min(aNumber[0], aNumber[1], aNumber[2])
}

var a = minAleatoryNumber()
console.log(a);
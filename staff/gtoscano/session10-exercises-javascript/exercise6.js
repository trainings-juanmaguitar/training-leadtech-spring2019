//Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. For instance, if the randomized number was 1049, program should print 14

function randomSum(){
    var aNumbers = [];
    var nAleatoryNum = Math.floor(Math.random() * 8999 + 1000)
    var aNumber = (nAleatoryNum.toString()).split('')
    return aNumber.reduce(function(acc, current){ return  parseInt(parseInt(acc) + parseInt(current))})
}

var sum = randomSum()
console.log(sum)

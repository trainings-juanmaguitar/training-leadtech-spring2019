//Randomizes a number (range 1000..9999) and calculate the sum of its digits repeatedly until you reach one digit only. For instance, if the randomized number was 1049, program should print 5

function randomOne(){
    var aNumbers = [];
    var nAleatoryNum = Math.floor(Math.random() * 8999 + 1000)
    
    function numberToArray(nNum){
        return (nNum.toString()).split('')
    }

    function sumNumbers(acc, current){ 
        return  parseInt(parseInt(acc) + parseInt(current))
    }
    var aNumber = numberToArray(nAleatoryNum)
    var nsumTotal = aNumber.reduce(sumNumbers)
    var aSum = numberToArray(nsumTotal)
    return aSum.reduce(sumNumbers)
}

var sum = randomOne()
console.log(sum)

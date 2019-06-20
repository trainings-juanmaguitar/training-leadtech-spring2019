//Randomizes a number n in range 0..100. Now randomizes n more numbers in that range, printing the largest of them

function randomRandom(){
    var nlargest = 0; 
    var nAleatoryNum = Math.floor(Math.random() * 100)
    
    for (var i=0; i<nAleatoryNum; i++){
        nNumber = Math.floor(Math.random() * 100)
        if(nNumber > nlargest){
            nlargest = nNumber
        }
    }
    return nlargest
}

var nlargestNumber = randomRandom();
console.log(nlargestNumber)
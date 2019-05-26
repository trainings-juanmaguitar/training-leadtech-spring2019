/**
 * randomRandom()
Randomizes a number n in range 0..100. Now randomizes n more numbers in that range, printing the largest of them.
 */

 function randomRandom() {
    var nRandomTimes=Math.floor(Math.random() * 101);
    var nlargestRandom=0;
    for( var i=0; i<nRandomTimes; i++){
     var   nCurrentRandom= Math.floor(Math.random() * 101); 
        if(nlargestRandom<nCurrentRandom) nlargestRandom=nCurrentRandom
    }
    return nlargestRandom
 }
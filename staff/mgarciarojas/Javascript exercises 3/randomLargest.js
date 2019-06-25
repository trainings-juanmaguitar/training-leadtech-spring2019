/**
 * randomLargest()
Randomizes three numbers in range (0.. 100) and prints the largest one.
 */

 function randomLargest(){
    var nLargest=0;

    for (var i=0; i<3; i++){
        var nCurrent=Math.floor(Math.random() * 101); 
       if(nCurrent>nLargest){
           nLargest=nCurrent
       }
    }
    return nLargest
 }

 var randomLargest = () => new Array(3)
 .fill(0)
 .map(() => Math.round(Math.random()*100))
 .reduce()
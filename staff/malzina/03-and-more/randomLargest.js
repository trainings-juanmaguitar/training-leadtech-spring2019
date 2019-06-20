/*
randomLargest()
Randomizes three numbers in range (0.. 100) and prints the largest one.
*/

function randomLargest() {
    var aNumbers = [];
    while(aNumbers.length < 3){
        var random = Math.floor(Math.random() * 100) + 0;
        aNumbers.push(random);
    }
    return Math.max(...aNumbers);
}
/*
randomSum()
Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. 
For instance, if the randomized number was 1049, program should print 14
*/

function randomSum() {
    var randomNumber = Math.floor(Math.random() * 9999) + 1000;
    var sNumber = randomNumber.toString();
    var sum = 0;
    for(i = 0; i <= sNumber.length - 1; i++){
        sum += +sNumber[i];
    }
    return sum;
}
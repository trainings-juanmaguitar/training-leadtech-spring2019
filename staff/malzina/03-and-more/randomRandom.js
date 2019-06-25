/*
randomRandom()
Randomizes a number n in range 0..100. Now randomizes n more numbers in that range, printing the largest of them.
*/

function randomRandom() {
    var randomNumber = Math.floor(Math.random() * 100) + 0;
    var number;
    var aNumbers = [];
    for(var i = 0; i <= randomNumber; i++) {
        number = Math.floor(Math.random() * 100) + 0;
        aNumbers.push(number);
    }
    return Math.max(...aNumbers);
}
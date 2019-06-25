/*
randomEven()
Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.
*/

function randomEven() {
    var randomNumber = Math.floor(Math.random() * 100) + 0;
    var aResult = [];
    for(var i = 0; i <= randomNumber; i++) {
        if(i % 2 === 0) {
            aResult.push(i);
        }
    }
    return aResult;
}
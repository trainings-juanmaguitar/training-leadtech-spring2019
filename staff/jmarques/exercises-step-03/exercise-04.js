// 4 -- Randomizes a number(range 0..100), then prints all the odd numbers from 40 to that one.
//      If the number was smaller than 40, print all the numbers down to the randomized
//      one(i.e.if the result was 37, you should print: 40, 39, 38, 37)
function randomOddSmallers() {
    var numRandom = Math.floor(Math.random(0) * 100),
        index = 40,
        numbersOdd = [],
        numbersOddReverse,
        result;
    if (numRandom >= 40) {
        while (index <= numRandom) {
            if (index % 2) {
                numbersOdd.push(index);
            }
            index++;
        }
        result = `Los números impares entre 40 a ${numRandom} son: [${numbersOdd}]`;
    } else {
        while (index >= 0) {
            if (index % 2) {
                numbersOdd.push(index);
            }
            index--;
        }
        numbersOddReverse = numbersOdd;
        result = `El número aleatorio es: ${numRandom} Los números impares entre 40 y 0 son: [${numbersOddReverse}]`;
    }
    
    return result;
}

// 3-- Randomizes a number(range 0..100), then prints all the odd numbers from 40 to that one.
//     If the number was smaller than 40 nothing should be printed
function randomOdd() {
    var numRandom = Math.floor(Math.random(0) * 100),
        index = 40,
        numbersOdd = [],
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
        result = `Error el número aleatorio es: ${numRandom}`;
    }
    
    return result;
}
randomOdd();
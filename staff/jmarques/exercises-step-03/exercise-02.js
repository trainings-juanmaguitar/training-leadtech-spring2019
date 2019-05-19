// 2-- Randomizes a number(range 0..100), then prints all the even numbers from 0 to the randomized.
function randomEven() {
    var numRandom = Math.floor(Math.random(0) * 100),
        index = 0,
        numbersEven = [],
        result;
    while (index <= numRandom) {
        if (index % 2 == 0) {
            numbersEven.push(index);
        }
        index++;
    }
    
    result = `Los números pares entre 0 y ${numRandom} son: [${numbersEven}]`;
    return result;
}
randomEven();
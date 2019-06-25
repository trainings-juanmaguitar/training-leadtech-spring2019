// 2-- Randomizes a number(range 0..100), then prints all the even numbers from 0 to the randomized.
var randomEven = () => {
    let numRandom = Math.round(Math.random() * 100);
    let numRandomList = new Array(numRandom)
        .fill()
        .map((_, index) => index++);
    let result = [];

    numRandomList.map((el) => el % 2 == 0 ? result.push(el) : '');

    result = `Los números pares entre 0 y ${numRandom} son: [${result}]`;
    
    return result;
}
randomEven();


// 4 -- Randomizes a number(range 0..100), then prints all the odd numbers from 40 to that one.
//      If the number was smaller than 40, print all the numbers down to the randomized
//      one(i.e.if the result was 37, you should print: 40, 39, 38, 37)

var generateArray = (numRandom, numRest) => new Array(numRest - numRandom)
                                            .fill(0)
                                            .map(() => numRandom++);
var randomOddSmallers = () => {
    
    let numRandom = Math.round(Math.random() * 100);
    let num = numRandom;
    let numRandomList;
    let arrResult = [];
    let message = `No es posible con este número: ${num}`;

    if (numRandom >= 40) {
        numRandomList = generateArray(numRandom, 101);
        numRandomList.map((el) => el % 2 ? arrResult.push(el) : '');
        message = `Los números impares entre ${num} a 100 son: [${arrResult}]`;
    } else {
        numRandomList = generateArray(numRandom, 41);
        message = `Los números de ${num} a 40 son: [${numRandomList}]`;
    }

    return message;
}
randomOddSmallers();




// 3-- Randomizes a number(range 0..100), then prints all the odd numbers from 40 to that one.
//     If the number was smaller than 40 nothing should be printed

var randomOdd = () => {
    let numRandom = Math.round(Math.random() * 100);
    let num = numRandom;
    let numRandomList;
    let arrResult = [];
    let message = `No es posible con este número: ${num}`;
    if(numRandom >= 40){
        numRandomList = new Array(101 - numRandom).fill(0).map(() => numRandom++);
        numRandomList.map((el) => el % 2 ? arrResult.push(el) : '');
        message = `Los números impares entre ${num} a 100 son: [${arrResult}]`;
    }
    
    return message;
}
randomOdd()
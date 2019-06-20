// 8 -- Randomizes two numbers and prints the smallest number that is greater than one,
//      such that both numbers are divided by it with no remainder.
//      For instance, for 9 and 6 you should print 3. If there isn't one a proper note should be printed.
function randomSmallest() {

    var numList = [];
    [0, 1].forEach(function () {
        var numRandom = Math.floor(Math.random() * 100);
        numList.push(numRandom);
    });

    var numMin = Math.min.apply(null, numList),
        numMax = Math.max.apply(null, numList),
        indice = 2,
        result = `Números aleatorio: [${numList}] Note should be printed.`;

    while (indice < numMax) {
        indice++;
        if (numMax % indice == 0 && numMin % indice == 0) {
            result = `Números aleatorio: [${numList}] Resultado: ${indice}`;
        }
    }

    return result;
}

randomSmallest();
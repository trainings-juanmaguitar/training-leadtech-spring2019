// 6 - Randomizes a number(range 1000.. 9999) and calculate the sum of its digits.For instance,
//     if the randomized number was 1049, program should print 14
function randomSum() {
    var numRandom = Math.floor(Math.random() * (9999 - 1000)) + 1000,
        convertNum = numRandom.toString(),
        convertSplit = convertNum.split(''),
        sum = 0,
        result = '';

    convertSplit.forEach(function (el) {
        sum = sum + parseInt(el, 10);
    });

    result = `Número Random Obtenido: ${numRandom} - Total Suma: ${sum}`;
    return result;
}
randomSum();
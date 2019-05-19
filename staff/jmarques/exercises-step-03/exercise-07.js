// 7 Randomizes a number(range 1000..9999) and calculate the sum of its digits repeatedly until you reach one digit only.
// For instance, if the randomized number was 1049, program should print 5
function randomOne() {

    var result = 0,
        numRandom = Math.floor(Math.random() * (9999 - 1000)) + 1000,
        sum = sumNumberToArray(numRandom),
        result = '';

    while (sum > 9) {
        sum = sumNumberToArray(sum);
    }

    result = `Número Random Obtenido: ${numRandom} - Total Suma: ${sum}`;

    return result;
}
// Converter y sumar números
function sumNumberToArray(num) {
    var convertNum = num.toString(),
        convertSplit = convertNum.split(''),
        sum = 0;

    convertSplit.forEach(function (el) {
        sum = sum + parseInt(el, 10);
    });
    
    return sum;
}

randomOne();
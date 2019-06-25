// 1 -- Randomizes a number n in range 0..100.Now randomizes n more numbers in that range, printing the largest of them.
// --- Incompleto
function randomRandom() {
    var numRandom = Math.floor(Math.random() * 100);
    var numRandomRandom = Math.floor(Math.random() * (100 - numRandom)) + numRandom;
    var numMax = Math.max.apply(null, [numRandom, numRandomRandom]);
    var result = `Números random: [${numRandom}, ${numRandomRandom}] Result: ${numMax}`
    return result;
}
randomRandom();
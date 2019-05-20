// 1 -- Randomizes a number n in range 0..100.Now randomizes n more numbers in that range, printing the largest of them.
// --- Incompleto
function randomRandom() {
    var result = 0,
        numRandom1 = Math.floor(Math.random() * 100),
        numRandom2 = Math.floor(Math.random() * numRandom1),
        sum = numRandom1 + numRandom2;
    return [numRandom1, numRandom2, sum];
}
randomRandom();
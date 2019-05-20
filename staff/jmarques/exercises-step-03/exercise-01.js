// 1-- Randomizes three numbers in range(0.. 100) and prints the largest one.
// 
// --- Math.max.apply() https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/max
function randomLargest() {
    var numRandomList = [],
        result = 0;
    // Podria ser un while ?? Ej var index = 0; while(index<3)
    [0, 1, 2].forEach(function () {
        var numRandom = Math.floor(Math.random(0) * 100);
        numRandomList.push(numRandom);
    });
    
    result = `El número mayor en el Array:[${numRandomList}] es: ${Math.max.apply(null, numRandomList)}`;
    return result;
}
randomLargest();
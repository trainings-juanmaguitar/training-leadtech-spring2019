// 1-- Randomizes three numbers in range(0.. 100) and prints the largest one.
// 
// --- Math.max.apply() https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/max
var randomLargest = () => {
    let numRandomList = new Array(3)
    .fill()
    .map(()=> Math.round(Math.random()*100));

    let result = `El número mayor en el Array:[${numRandomList}] es: ${Math.max.apply(null, numRandomList)}`;
    return result;
}
randomLargest();







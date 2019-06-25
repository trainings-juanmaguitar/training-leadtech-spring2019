const originalData = [1,2,3,4,5,6,7]
const parsedData = originalData
    .filter(n => n % 2)
    .map((n, i) => n+i);

console.log(parsedData)
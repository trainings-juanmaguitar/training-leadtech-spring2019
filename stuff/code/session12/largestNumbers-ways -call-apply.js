// Randomizes three numbers in range (0.. 100) and prints the largest one.

const getThreeRandomNumbers = () => 
    new Array(3)
        .fill(0)
        .map(() => Math.round(Math.random()*100))

[23, 5, 34]

const largestNumberWay1 = aNumbers => 
    aNumbers
        .reduce( (largest, number) => 
            number > largest ? number : largest
        , 0)

const largestNumberWay2 = numbers => Math.max.apply(null,numbers)

Math.max(3,5,23,3)
Math.max([3,5,23,3]) // NaN
Math.max.call(null, 3, 5, 23, 3)
Math.max.apply(null, [3, 5, 23, 3])

const largestNumberWay3 = numbers => numbers.sort((a,b) => a-b).pop()

const numbers = getThreeRandomNumbers()
console.log(numbers)

const maxOfNumbers1 = largestNumberWay1(numbers)
const maxOfNumbers2 = largestNumberWay2(numbers)
const maxOfNumbers3 = largestNumberWay3(numbers)


// Javascript Exercises

/* randomLargest()
Randomizes three numbers in range (0.. 100) and prints the largest one. */

function randomLargest(){
    var arrayOfNumbers = [];
    for (var i = 0; i < 3; i++){
        arrayOfNumbers.push(Math.random()*(100));
    }
    var LargestNumber = Math.max.apply(null, arrayOfNumbers);
    return LargestNumber;
}

/* randomEven()
Randomizes a number (range 0..100), then prints all the even numbers from 0 
to the randomized.  */

function randomEven(){
    var numberRandomized = Math.round(Math.random()*(100));
    var ArrayWithValues = [];
    for (var i = 0; i < numberRandomized; i++){
        if (i % 2 == 0) ArrayWithValues.push(i);
    }
    return ArrayWithValues;
}

/* randomOdd()
Randomizes a number (range 0..100), then prints all the odd numbers from 40 
to that one. If the number was smaller than 40 nothing should be printed  */

function randomOdd(){
    var numberRandomized = Math.round(Math.random()*(100));
    var ArrayWithValues = [];
    for (var i = 40; i < numberRandomized; i++){
        if (i % 2 == 1) ArrayWithValues.push(i);
    }
    return ArrayWithValues;
}

/* randomOddSmallers()
Randomizes a number (range 0..100), then prints all the odd numbers from 40 
to that one. If the number was smaller than 40, print all the numbers down to 
the randomized one (i.e. if the result was 37, you should print: 40, 39, 38, 37)  */

function randomOddSmallers(){
    var numberRandomized = Math.round(Math.random()*(100));
    console.log(numberRandomized);
    var arrayWithValues = [];
    for (var i = 40; i > numberRandomized; i--){
        if (i % 2 == 1) arrayWithValues.push(i);
    }
    return arrayWithValues;
}

/* randomRandom()
Randomizes a number n in range 0..100. Now randomizes n more numbers in that 
range, printing the largest of them.  */

function randomRandom(n){
    var arrayOfNumbers = [];
    for (var i = 0; i < n; i++){
        arrayOfNumbers.push(Math.random()*(100));
    }
    var LargestNumber = Math.max.apply(null, arrayOfNumbers);
    return LargestNumber;
}

/* randomSum()
Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. 
For instance, if the randomized number was 1049, program should print 14  */

function randomSum(){
    var numberRandomized = Math.round(Math.random()*(9999 - 1000) + 1000);
    var numberSumDigits = 0;
    snumberRandomized = numberRandomized.toString();
    snumberRandomized.split('').forEach(snumberRandomized => numberSumDigits += parseInt(snumberRandomized));
    return numberSumDigits;
}

/* randomOne()
Randomizes a number (range 1000..9999) and calculate the sum of its digits 
repeatedly until you reach one digit only. For instance, if the randomized 
number was 1049, program should print 5  */

function randomOne(){
    var numberRandomized = Math.round(Math.random()*(9999 - 1000) + 1000);
    var numberSumDigits = 0;
    do{
        if (numberSumDigits != 0){ numberRandomized = numberSumDigits };
        snumberRandomized = numberRandomized.toString();
        snumberRandomized.split('').forEach(snumberRandomized => numberSumDigits += parseInt(snumberRandomized));
    }while (numberSumDigits > 9);
    return numberSumDigits;
}

/* randomSmallest()
Randomizes two numbers and prints the smallest number that is greater than one, 
such that both numbers are divided by it with no remainder. For instance, for 9 
and 6 you should print 3. If there isn't one a proper note should be printed.  */

/* randomLeastCommon()
Randomizes two numbers and prints their least common multiplication of them. 
(use http://en.wikipedia.org/wiki/Least_common_multiple for details) Randomizes 
two numbers and prints their average and standard deviation.  */
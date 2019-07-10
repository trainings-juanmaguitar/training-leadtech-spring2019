/*
randomLargest()
Randomizes three numbers in range (0.. 100) and prints the largest one.
*/

function randomLargest() {
    var aNumbers = []
    for (var i=0; i<3; i++) {
        aNumbers.push(Math.round(Math.random()*100));
    }
    return Math.max(...aNumbers);
}
/*
randomEven()
Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.
*/

function randomEven() {
    var sNumbersEven = '';
    var randomNumber = Math.round(Math.random()*100)
    for (var i=0; i<=randomNumber; i++) {
        if (i%2==0) sNumbersEven += i +'\t';
    }
    return sNumbersEven.trim()
}

/*
randomOdd()
Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40 nothing should be printed
*/

//Result Array to String

function randomOdd() {
    var aNumbersOdd = [];
    var randomNumber = Math.round(Math.random()*100)
    if (randomNumber >= 40) {
        for (var i=40; i<=randomNumber; i++) {
            if (i%2==1) aNumbersOdd.push(i)
        }
        console.log(aNumbersOdd)
        return aNumbersOdd.toString()
    }
}

/*
randomOddSmallers()
Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40, print all the numbers down to the randomized one (i.e. if the result was 37, you should print: 40, 39, 38, 37)
*/

function randomOddSmallers() {
    var sNumbersOdd = '';
    var randomNumber = Math.round(Math.random()*100)
    if (randomNumber >= 40) {
        for (var i=40; i<=randomNumber; i++) {
            if (i%2==1) sNumbersOdd += i +'\t';
        }
    }
    else {
        for (var i=40; i>=randomNumber; i--) {
           sNumbersOdd += i +'\t';
        }
       
    }
    return sNumbersOdd.trim()
}

/*
randomRandom()
Randomizes a number n in range 0..100. Now randomizes n more numbers in that range, printing the largest of them.
*/

function randomRandom() {
    var aNumbers = []
    var randomNumber = Math.round(Math.random()*100)
    for (var i=0; i<randomNumber; i++) {
        aNumbers.push(Math.round(Math.random()*randomNumber));
    }
    return Math.max(...aNumbers);
}

/*
randomSum()
Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. For instance, if the randomized number was 1049, program should print 14
*/

function randomSum() {
    var sum = 0
    var randomNumber = Math.round(Math.random()*(9999-1000) + 1000)
    var aRandomNumber = randomNumber.toString().split('')
    function sumaArray(element, index, array) {
        sum = sum + parseInt(element);
    }
    aRandomNumber.forEach(sumaArray);

    return sum;
}
/*
randomOne()
Randomizes a number (range 1000..9999) and calculate the sum of its digits repeatedly until you reach one digit only. For instance, if the randomized number was 1049, program should print 5
*/

function randomOne() {
    var sumRandomNumber = 0
    var aRandomNumber = []
    var randomNumber = Math.round(Math.random()*(9999-1000) + 1000)
    
    while (sumRandomNumber >= 10 || sumRandomNumber==0){
        sumRandomNumber = 0
        aRandomNumber = randomNumber.toString().split('')  
        function sumaArray(element, index, array) {
            sumRandomNumber = sumRandomNumber + parseInt(element);
        }
        aRandomNumber.forEach(sumaArray);
        randomNumber = sumRandomNumber;
    }
    return sumRandomNumber;
}

/*
randomSmallest()
Randomizes two numbers and prints the smallest number that is greater than one, such that both numbers are divided by it with no remainder. For instance, for 9 and 6 you should print 3. If there isn't one a proper note should be printed.
*/

function randomSmallest() {
    var random1 = Math.round(Math.random()*30+1)
    var random2 = Math.round(Math.random()*30+1)
    var aEqualsNumbersNoRemainder = []
    //console.log(random1+"---");
    //console.log(random2+"---");

    function numbersNoRemainderBy (num) {
        var numbersNoRemainder = []
        for (var i=2; i<num; i++) {
            if (num%i == 0) {
                numbersNoRemainder.push(i);
            } 
        }
        return numbersNoRemainder
    }
    var aRandom1 = numbersNoRemainderBy(random1);
    var aRandom2 = numbersNoRemainderBy(random2);
    
    //console.log(aRandom1);
    //console.log(aRandom2);

    if (aRandom1.length == 0 || aRandom2.length == 0)
        return "No existe un número igual para los dos números aleatorios que el resto sea 0"
    else {
        for (var i=0; i<aRandom1.length; i++) {
            if (aRandom2.includes(aRandom1[i])) aEqualsNumbersNoRemainder.push(aRandom1[i])
        }
        if (aEqualsNumbersNoRemainder.length > 0) return aEqualsNumbersNoRemainder[0];
        else return "No existe un número igual para los dos números aleatorios que el resto sea 0"
    }
}

/*
randomLeastCommon()
Randomizes two numbers and prints their least common multiplication of them. (use http://en.wikipedia.org/wiki/Least_common_multiple for details) Randomizes two numbers and prints their average and standard deviation.
*/
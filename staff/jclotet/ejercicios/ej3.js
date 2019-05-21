'use strict';
// https://github.com/juanmaguitar/exercises-javascript/tree/master/03-and-more

//randomLargest()
//Randomizes three numbers in range (0.. 100) and prints the largest one.


// Solution 1
function randomLargest() {
  var allNumbers = [];
  var largestNumber = 0;
  for (var i=0; i<3; i++) {
    var number = Math.floor(Math.random() * 100)
    if (number > largestNumber) largestNumber = number;
    allNumbers.push(number);
  }
  return "The largest number is " + number + ' among: ' + allNumbers[0] + ', '  + allNumbers[1] + ', '  + allNumbers[2];
}

console.log(randomLargest());

// Solution 2
function randomLargest2() {
  var allNumbers = [];
  for (var i=0; i<3; i++) {
    var number = Math.floor(Math.random() * 100)
    allNumbers.push(number);
  }
  allNumbers.sort((a,b)=>{
    return a-b;
  })

  return allNumbers.pop();
}

console.log(randomLargest2());


//randomEven()
//Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.

function randomEven() {
  var number = Math.floor(Math.random() * 100)
  var allNumbers = '';
  for (var i=0; i<=number; i += 2) {
    allNumbers = allNumbers + i + '\t';
  }
  return allNumbers;
}

console.log(randomEven());

//randomOdd()
//Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. 
//If the number was smaller than 40 nothing should be printed

function randomOdd() {
  var number = Math.floor(Math.random() * 100)
  var allNumbers = '40\t';
  if (number >= 41) {
    for (var i=41; i<=number; i += 2) {
      allNumbers = allNumbers + i + '\t';
    }
    return allNumbers;
  } else {
    return "The number is smaller or equal than 40"
  }
  
}

console.log(randomOdd());

//randomOddSmallers()
//Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. 
//If the number was smaller than 40, print all the numbers down to the randomized one 
//(i.e. if the result was 37, you should print: 40, 39, 38, 37)

function randomOddSmallers() {
  var number = Math.floor(Math.random() * 100)
  console.log(number);
  var upNumbers = '40\t';
  var downNumbers = '';
  if (number >= 41) {
    for (var i=41; i<=number; i += 2) {
      upNumbers = upNumbers + i + '\t';
    }
    return upNumbers;
  } else if (number <= 40) {
    for (var j=40; j>=number; j-=1) {
      downNumbers = downNumbers + j + '\t';
    }
    return downNumbers;
  }
  
}

console.log(randomOddSmallers());


//randomRandom()
//Randomizes a number n in range 0..100. Now randomizes n more numbers in that range, printing the largest of them.

function randomRandom() {
  var nTimes = Math.floor(Math.random() * 100);
  var randomNumber = 0;
  var arrayOfNumbers = [];
  for (var i=0; i<nTimes; i++) {
    randomNumber = Math.floor(Math.random() * 100);
    arrayOfNumbers.push(randomNumber);
  }
  var largest = arrayOfNumbers.sort((a,b)=>{return a-b;}).pop();
  return largest;
}

console.log(randomRandom());


//randomSum()
//Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. 
//For instance, if the randomized number was 1049, program should print 14


function randomSum() {
  var random = Math.floor(Math.random() * (9999 - 1000)) + 1000;
  var sRandom = '' + random;
  var arrayDigitsSum = sRandom.split('');
  var sum = arrayDigitsSum.reduce((acc, elem, index)=>{
    acc = acc + parseInt(elem,10);
    return acc;
  },0);
  return sum;
}

console.log(randomSum());



//randomOne()
//Randomizes a number (range 1000..9999) and calculate the sum of its digits repeatedly until you reach one digit only. 
//For instance, if the randomized number was 1049, program should print 5

function randomOne() {
  var random = Math.floor(Math.random() * (9999 - 1000)) + 1000;
  var sRandom = '' + random;

  do {
    var arrayDigitsSum = sRandom.split('');
    var sum = arrayDigitsSum.reduce((acc, elem, index)=>{
    acc = acc + parseInt(elem,10);
    return acc;
    },0);
    sRandom = '' + sum;
  } while (sum>10);

  return sum;
}

console.log(randomOne());



//randomSmallest()
//Randomizes two numbers and prints the smallest number that is greater than one, 
//such that both numbers are divided by it with no remainder. 
//For instance, for 9 and 6 you should print 3. If there isn't one a proper note should be printed.






//randomLeastCommon()
//Randomizes two numbers and prints their least common multiplication of them. 
//(use http://en.wikipedia.org/wiki/Least_common_multiple for details) Randomizes two numbers and 
//prints their average and standard deviation.

var numbers = function twoRandomNumbers() {
  var num1 = Math.floor(Math.random() * 100);
  var num2 = Math.floor(Math.random() * 100);
  return [num1, num2];
}

function lestCommonMultiple(numbers) {
  var mul = numbers.reduce((acc,elem,index)=>{
    return acc = acc * elem;
  },1);

  do {
    if ((mul/2)%numbers[0] === 0 && (mul/2)%numbers[1] === 0) {
      mul = mul/2;
    } else {
      mul=mul;
    }
  } while ((mul/2)%numbers[0] === 0 && (mul/2)%numbers[1] === 0)
  return mul;
}

//console.log(lestCommonMultiple(numbers()));
console.log(lestCommonMultiple([12,10]));


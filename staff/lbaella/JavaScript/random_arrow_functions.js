/*
randomLargest()
Randomizes three numbers in range (0.. 100) and prints the largest one.
*/

var randomLargest = () => new Array (3)
                        .fill(0)
                        .map(() => Math.round(Math.random()*100))
                        .reduce ((largest, number, index, array) => {
                            if (index === array.length-1) console.log(array)
                            return number > largest ? number : largest
                        }, 0)

 var randomLargest = () => new Array(3)
                        .fill()
                        .map(() => Math.round(Math.random()*100))
                        .sort((a,b) => a-b)
                        .map((elem,index,array) => {
                            if (index === array.length-1) console.log(array)
                            return elem
                        })
                        .pop();

var randomLargest = Math.max.apply(
    null, 
    new Array(3)
        .fill()
        .map((_, i) => {
            const elem = Math.round(Math.random()*100)
            console.log(i + ' → ' + elem)
            return elem
        })
)
                   
const largestNumberWay1 = numbers => 
    numbers
        .reduce( (largest, number) => 
            number > largest ? number : largest
        , 0)

const largestNumberWay2 = numbers => Math.max.apply(null,numbers)

const largestNumberWay3 = numbers => numbers.sort((a,b) => a-b).pop()


/* Apply call */
//Nos dejar hacer llamadas a arrays

Math.max.apply(this o null, [3, 4, 5])
Math.max.call(this o null, 3, 4, 5)

var name = "laura"
var a = `hola ${name}`

/*
randomEven()
Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.
*/

var randomEven = () => new Array(Math.ceil(Math.random()*100))
                        .fill(0)
                        .map((_,i) => i) 
                        .filter(n => !Boolean(n%2))
                        .filter(n => n%2 === 0 )


/*
randomOdd()
Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40 nothing should be printed
*/

var randomOdd = () => {
    var number = Math.floor(Math.random()*100);
    console.log(number);
    //var number = 45;
    if (number>=40) {
        return new Array(number+1 - 40)
                .fill(40)
                .map((elem,i) => elem+i)
                .filter(n => (Boolean(n%2) && (n <= number)));
    } else {
        return 'Nothing to show';
    }
}


/*
randomOddSmallers()
Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40, print all the numbers down to the randomized one (i.e. if the result was 37, you should print: 40, 39, 38, 37)
*/

var randomOddSmallers = () => {
    var number = Math.floor(Math.random()*100);
    console.log('Random Number: ' + number)
    if (number>=40) {
        return new Array(number+1 - 40)
                .fill(40)
                .map((elem,i) => elem+i)
                .filter(n => (Boolean(n%2) && (n < number)));
    } else {
        return new Array(40 - number+1)
                .fill(40)
                .map((elem,i) => elem-i)
    }
}


/*
randomRandom()
Randomizes a number n in range 0..100. Now randomizes n more numbers in that range, printing the largest of them.
*/


var randomRandom = () => {
    var number = Math.floor(Math.random()*100)
    console.log('Random Number: ' + number)
    return new Array (number)
                .fill()
                .map(() => Math.round(Math.random()*number))
                .sort((a,b) => a-b)
                .map((elem,index,array) => {
                    if (index === array.length-1) console.log(array)
                    return elem
                })
                .pop();
}

/*
randomSum()
Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. For instance, if the randomized number was 1049, program should print 14
*/


var randomSum = () => {
    var number = Math.round(Math.random()*(9999-1000) + 1000)
    console.log(number);
    return number.toString().split('')
                .reduce ((acc, element, index, array) => {
                    return acc + parseInt(element)
                }, 0)
}

/*
randomOne()
Randomizes a number (range 1000..9999) and calculate the sum of its digits repeatedly until you reach one digit only. For instance, if the randomized number was 1049, program should print 5
*/

function isMoreThan10(element, index, array) {
    return array.length > 1;
}
function sumElements(acc, element, index, array) {
    console.log(index)
    if (index === array.length-1) console.log(acc)
    return acc + parseInt(element);
 };

var randomOne = () => {
    var number = Math.round(Math.random()*(9999-1000) + 1000)
    console.log(number);
    return number.toString().split('')
                .reduce (sumElements, 0)
}

/*
randomSmallest()
Randomizes two numbers and prints the smallest number that is greater than one, such that both numbers are divided by it with no remainder. For instance, for 9 and 6 you should print 3. If there isn't one a proper note should be printed.
*/


/*
randomLeastCommon()
Randomizes two numbers and prints their least common multiplication of them. (use http://en.wikipedia.org/wiki/Least_common_multiple for details) Randomizes two numbers and prints their average and standard deviation.

*/


/*_Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab"). */

var charFreq = text => text.split('')
            .reduce ((oCharFreq, char, index, array) => {
                oCharFreq[char] ?  ++oCharFreq[char] : oCharFreq[char] = 1
                return oCharFreq
            }, [])
            .map((elem,index,array) => {
                if (index === array.length-1) console.log(array)
                return elem
            })


/** */

var charFreq = text => text.split('')
            .reduce ((oCharFreq, char, index, array) => {
                oCharFreq[char] ?  ++oCharFreq[char] : oCharFreq[char] = 1
                return oCharFreq
            }, {})
            
var obj = charFreq('aabbcbb');

const loopNestedObj = (obj) => 
  Object.keys(obj)
    .sort((a, b) => a[1]-b[1]);


var charFreq = text => text.split('')
            .reduce ((oCharFreq, char, index, array) => {
                oCharFreq[char] ?  ++oCharFreq[char] : oCharFreq[char] = 1
                return oCharFreq
            }, {})


var wordFreq = text => text.split(' ')
            .reduce ((oWordFreq, word, index, array) => {
                var cleanedWord = word
                cleanedWord = cleanedWord.replace(",","")
                cleanedWord = cleanedWord.replace(".","")
                cleanedWord = cleanedWord.replace('"',"")
                cleanedWord = cleanedWord.replace("\n", " ")
                oWordFreq[word] ?  ++oWordFreq[word] : oWordFreq[word] = 1
                return oWordFreq
            }, {})

/*
Object.keys(obj) -> [a,b,c]
Object.values(obj) -> [1,2,3]
*/


const oObjectResult= wordFreq(text)

var result = Object.keys(oObjectResult)
                    .map(key => [key, oObjectResult[key]])
                    .sort((a,b)=> {if (a[1]===b[1]) return 0
                        else return (a[1] > b[1]) ? -1 : 1
                    })
                    .splice(0,10)
                    .map(key => key[0])

/*cons result */
var result = (obj) => {
    var aResult = []
    Object.entries(obj).forEach(([key, val]) => {
        aResult[key] = val
    });
    aResult.sort((a, b) => a[1]-b[1]);
    return aResult
};

const sortFreqStats = oStats => Object.keys(oStats)
    .sort((a,b) => {
        if (oStats[a] > oStats[b]) return -1
        if (oStats[a] < oStats[b]) return 1
        return 0
    })
    .map(word => [word, oStats[word]])

sortFreqStats(wFrq).slice(0,10)

/*

function charFreq(string) {
    var result = {};
    var arrayString = string.split('');
 
    for(var i=0; i<arrayString.length; i++) {
        var letter = arrayString[i];
        if (arrayString[i]!= ' ') {
            //if (result[letter]) result[letter] = result[letter] + 1;
            if (result[letter]) ++result[letter];
            else result[letter] = 1;
        }
    }
    return result;
}
*/

/*Quitamos los espacio vacíos */

csv.split("\n").filter(row => row)
csv.split("\n").filter(row => Boolean(row))
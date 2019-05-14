// Integer Numbers Range
// Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. If x2 es lower than x1 it should return -1
function numbersRange(number1, number2) {
    if (number1 >= number2) {
        return -1
    } else {
        for (var i = number1; i < number2; i++) {
            console.log(i)
        }
    }
}

numbersRange(10, 30);
// Multiplications table
// Write a function that writes in the console the multiplication table (from 1 to 10)
function tablaMultiplicar() {
    var tabla = "";
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 10; j++) {
            tabla += " " + (i * j);
        }
        tabla += '\n';
    }
    console.log(tabla);
}
tablaMultiplicar();

// Multiplications table on demand
// Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter
function multiplicarOnDemand(number) {
    for (var i = 1; i <= 10; i++) {
        console.log(number + 'x' + i + '=' + number * i);
    }
}
multiplicarOnDemand(4);

// Calculation
// Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them
function calculation() {
    var result = 0;
    for (var i = 0; i < 500; i += 23) {
        console.log(i);
        result += i;
    }
    console.log("Sum: ", result);
}
calculation();

// max() function
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
function max(number1, number2) {
    if (number1 > number2 && number1 !== number2) {
        return number1;
    } else if (number2 > number1 && number2 !== number1) {
        return number2;
    } else {
        console.log('Números iguales');
    }
}
max(3, 80);

// maxOfThree() function
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        return number1;
    } else if (number2 > number1 && number2 > number3) {
        return number2;
    } else if (number3 > number1 && number3 > number2) {
        return number3;
    }
}
maxOfThree(50, 40, 70);


// isVowel() function
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(cadena) {
    var cadena = cadena.toLocaleUpperCase();
    if (cadena === 'A' || cadena === 'E' || cadena === 'I' || cadena === 'O' || cadena === 'U') {
        return true;
    } else {
        return false;
    }
}
isVowel("a");
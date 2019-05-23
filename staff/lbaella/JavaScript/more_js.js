/*
Calculator
Define a function called calculator that receives an operation and two numbers and returns the result of the operation applied to the values passed as parameters
*/

function calculator(operation, num1, num2) {
    if (operation=="suma") {
        return num1+num2
    } else if (operation=="resta") {
        return num1-num2
    }else if (operation=="multiplicacion") {
        return num1*num2
    }else if (operation=="division") {
        return num1/num2
    } else  {
        return "No existes esta operación"
    }
}

/*
Calculator Plus
Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) returns the result of the operation applied to the values passed as parameters
*/

function calculatorPlus() {
    if (arguments.length > 2 ) {
        var result = arguments[1]
        if (arguments[0]=="suma") {
            for (var i=2; i< arguments.length; i++) {
                result = result + arguments[i]
            }
            return result;
        } else if (arguments[0]=="resta") {
            for (var i=2; i< arguments.length; i++) {
                result = result - arguments[i]
            }
            return result;
        }else if (arguments[0]=="multiplicacion") {
            for (var i=2; i< arguments.length; i++) {
                result = result * arguments[i]
            }
            return result;
        }else if (arguments[0]=="division") {
            for (var i=2; i< arguments.length; i++) {
                result = result / arguments[i]
            }
            return result;
        }
    }
    else  {
        return "Falta un argumento en la operación"
    }
}

/*
getFullName
Define a function called ​getFullName​ that receives a name and a surname and return the string "Your full name is " with the name & surname concatenated
 */

 function getFullName(name, surname) {
     var message = "Your full name is "
     var name = name + " "
     return message.concat(name, surname)
 }

 /*
isNumber
Define a function called ​isNumber​ that receives a value and return true if the value received is a number
 */

function isNumber(number) {
    if (typeof(number) == "number") return true;
    else return false;
}

/*
isString
Define a function called ​isString​ that receives a value and return true if the value received is a string
*/
function isString(string) {
    if (typeof(string) == "string") return true;
    else return false;
}

/*
isBoolean
Define a function called ​isBoolean​ that receives a value and return true if the value received is a boolean
*/

function isBoolean(boolean) {
    if (typeof(boolean) == "boolean") return true;
    else return false;
}

/*
encodeWord
Define a function called ​encodeWord​ that receives a string and return the codified version of that string replacing the following characters:
7 instead of T
4 instead of A
5 instead of S
0 instead of O
*/

function encodeWord(string) {
    var encodeChars = {"T":"7", "A":"4", "S":"5", "O":"0"};
    var aString = string.split('')
    var result = ""
    function encode (element) {
        if (encodeChars[element]) result += encodeChars[element]
        else result += element;
    }
    aString.forEach(encode);

    return result;
}


/*
encodeWordPlus
Improve the previous function to add a random number between 0 and 1000 every 7 characters
*/

function encodeWordPlus(string) {
    var result = ""
    for (var i=0; i<string.length; i++) {
        if ((i+1)%7 == 0) result += Math.round(Math.random()*1000)
        else result += string[i]
    }
    return result;
}
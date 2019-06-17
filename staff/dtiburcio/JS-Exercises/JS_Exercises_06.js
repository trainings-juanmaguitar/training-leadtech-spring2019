//Javascript Exercises

/* Calculator
Define a function called calculator that receives an operation and two numbers and 
returns the result of the operation applied to the values passed as parameters

   calculator("suma",10,5) // 15
   calculator("resta",10,5) // 5
   calculator("multiplicacion",10,5) // 50
   calculator("division",10,5) // 2
*/

function calculator(nameOperation, firstOperator, secondOperator){
    var result = 0;
    switch (nameOperation){
        case 'suma': result = firstOperator + secondOperator; break;
        case 'resta': result = firstOperator - secondOperator; break;
        case 'multiplication': result = firstOperator * secondOperator; break;
        case 'division': result = firstOperator / secondOperator; break;
        default: result = "Not operation"
    }
    return result;     
}


/* Calculator Plus
Define a function called calculator that receives an operation and several numbers 
(can be 2 or 10 or whatever) returns the result of the operation applied to the values 
passed as parameters

   calculator("suma",10,5,2,3) // 20
   calculator("resta",10,5,1) // 4
   calculator("multiplicacion",10,5,2) // 100
   calculator("division",10,5) // 2
*/

function calculatorPlus(nameOperation, firstOperator, secondOperator){
    var result = arguments[1];
    
    switch (nameOperation){
        case 'suma': 
            for(var i=2; i < arguments.length;i++) result += arguments[i]; 
            break;
        case 'resta': 
            for(var i=2; i < arguments.length;i++) result -= arguments[i]; 
            break;
        case 'multiplication': 
            for(var i=2; i < arguments.length;i++) result *= arguments[i]; 
            break;
        case 'division': 
            for(var i=2; i < arguments.length;i++) result /= arguments[i]; 
            break;
        default: result = "Not operation"
    }
    return result;     
}

/* getFullName
Define a function called ​getFullName​ that receives a name and a surname and return the string "Your full name is " with the name & surname concatenated

   getFullName( "juanma", "garrido") // "Your full name is "juanma garrido""
*/

function getFullName(name,surname){
    return "Your full name is \"" + name + " " + surname + "\"";
}

/* isNumber
Define a function called ​isNumber​ that receives a value and return true if the value received is a number

   isNumber(3) // true
   isNumber("3") // false
   isNumber("asass") // false
*/

function isNumber(valueEntry){    
    return typeof(valueEntry) == "number";
}

/* isString
Define a function called ​isString​ that receives a value and return true if the value received is a string

   isString(3) // false
   isString("3") // true
   isString("asass") // true
*/

function isString(valueEntry){    
    return typeof(valueEntry) == "string";
}

/* isBoolean
Define a function called ​isBoolean​ that receives a value and return true if the value received is a boolean

   isBoolean(3) // false
   isBoolean("true") // false
   isBoolean(true) // true
*/

function isBoolean(valueEntry){    
    return typeof(valueEntry) == "boolean";
}

/* encodeWord
Define a function called ​encodeWord​ that receives a string and return the codified version of that string replacing the following characters:

7 instead of T
4 instead of A
5 instead of S
0 instead of O
*/

function encodeWord(entryWord){
    var arrayEntryWord = entryWord.split('');
    var arrayResult = [];
    var result;
    arrayEntryWord.forEach(function(element) {
        if (element == 7) arrayResult.push('T');
        else if (element == 4) arrayResult.push('A');
        else if (element == 5) arrayResult.push('S');
        else if (element == 0) arrayResult.push('0');
        else arrayResult.push(element);
    });
    result = arrayResult.toString().replace(/,/g, '');
    return result;
}

/* encodeWordPlus
Improve the previous function to add a random number between 0 and 1000 every 7 characters
*/

function encodeWordPlus(){
    var entryWord= [];
    for (var i = 0; i < 7; i++){
        var temporal = Math.floor(Math.random()*(1000));
        entryWord.push(temporal);
    }
    var arrayResult = [];
    var result;
    entryWord.forEach(function(element) {
        if (element == 7) arrayResult.push('T');
        else if (element == 4) arrayResult.push('A');
        else if (element == 5) arrayResult.push('S');
        else if (element == 0) arrayResult.push('0');
        else arrayResult.push(element);
    });
    result = arrayResult.toString().replace(/,/g, '');
    return result;
}
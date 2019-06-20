/*
getFullName
Define a function called ​getFullName​ that receives a name and a surname 
and return the string "Your full name is " with the name & surname concatenated
*/

function isNumber(number){
    if(typeof(number)==='number'){
        return true
    }else{
        return false
    }
}

console.log(isNumber(3));
console.log(isNumber("3"));
console.log(isNumber("asass"));
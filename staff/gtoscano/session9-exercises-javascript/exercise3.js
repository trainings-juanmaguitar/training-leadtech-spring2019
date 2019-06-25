//Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

function reverseString(text){
    arrayText= text.split('');
    return arrayText.reverse().join('');
}

a = reverseString("hola");
console.log(a)
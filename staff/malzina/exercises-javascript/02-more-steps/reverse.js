/*
Define a function reverse() that computes the reversal of a string. 
For example, reverse("jag testar") should return the string "ratset gaj".
*/

function reverse ( str ) {
    str = str.split("")
    str = str.reverse()
    str = str.join("")
    return str
}
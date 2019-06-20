/*
encodeWord
Define a function called ​encodeWord​ that receives a string and return the codified version 
of that string replacing the following characters:
7 instead of T
4 instead of A
5 instead of S
0 instead of O
*/

function encodeWord( string ) {
    string = string.replace('t','7');
    string = string.replace('a','4')
    string = string.replace('s','5');
    string = string.replace('o','0');
    return string;
}